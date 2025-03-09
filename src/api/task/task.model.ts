import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/entity';
import { TaskStatusEnum } from './task.enum';
import User from '../user/user.model';

@Entity('task')
export default class Task extends BaseEntity {
    @Column({ nullable: false, length: 50 })
    title!: string;

    @Column({ nullable: false, length: 255 })
    description!: string;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'userId' })
    user?: User | null;

    @Column({ type: "enum", enum: TaskStatusEnum, default: TaskStatusEnum.TO_START })
    status!: TaskStatusEnum;
}
