import { AppDataSource } from "../../config/database.config";
import log from "../../utils/loggers";
import User from "./user.model";
import { UserCreateType } from "./user.validations";

export const userRepository = AppDataSource.getRepository(User);

namespace UserService {
    export const createUser = async (requestBody: UserCreateType): Promise<void> => {
        log.info(`Creating user`);
        userRepository.save(requestBody);
    };
}


export default UserService;
