import { AppDataSource } from '../../config/database.config';
import log from '../../utils/logger';
import User from './user.model';
import { CreateUserType, LoginUserType } from './user.validations';
import bcrypt from 'bcryptjs';

export const userRepository = AppDataSource.getRepository(User);

export const signUpUserService = async (req: CreateUserType) => {
    log.info(`Creating user`);

    const saltRound = 10;

    const hashedPassword = await bcrypt.hash(req.password, saltRound);

    const userToSave = {
        name: req.name,
        email: req.email,
        password: hashedPassword
    }

    return await userRepository.save(userToSave);
};

export const loginUserService = async (req: LoginUserType) => {
    log.info(`Logging user`);

    const foundUser = await userRepository.findOne({ where: { email: req.email } });

    if (!foundUser) throw new Error("User not found!");

    const isPasswordMatched = await bcrypt.compare(req.password, foundUser?.password);

    if (!isPasswordMatched) throw new Error("Entered password is wrong!");


    return foundUser;
};

