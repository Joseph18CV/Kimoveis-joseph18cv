import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column( { type: "date" } )
    date: Date

    @Column( { type: "time" } )
    hour: string

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate
    
    @ManyToOne(() => User)
    user: User

}

export {
    Schedule
}