import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/entity';

@Entity('users')
export default class User extends BaseEntity {
    @Column({ nullable: false, length: 50 })
    name!: string;

    @Column({ nullable: false, length: 50, unique: true })
    email!: string;

    @Column({ nullable: false, length: 100 })
    password!: string;
}
