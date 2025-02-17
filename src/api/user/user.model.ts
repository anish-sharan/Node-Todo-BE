import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/entity';

@Entity("user")
export default class User extends BaseEntity {
    @Column({ nullable: false, length: 50 })
    name!: string;

    @Column({ nullable: false, length: 50 })
    email!: string;
}
