import handler from 'express-async-handler';
import { Router } from 'express';
import { ReservationModel } from '../models/reservation.model';
import { DayModel } from '../models/day.model';
import router from './food.router';

router.get("/reservation",(req,res)=>{
    DayModel.find({date: req.body.date}, (err,days)=>{
        if(!err){
            if(days.length > 0){
                let day = days[0];
                day.tables.array.forEach(table => {
                    if(table._id == req.body.table){
                        table.ReservationModel = new ReservationModel({
                            name: req.body.name,
                            phone: req.body.phone,
                            email: req.body.email
                        });
                        table.isAvaiable = false;
                        day.save(err=>{
                            if(err){
                                console.log(err);
                            }else{
                                console.log("Reserved");
                            }
                        });
                    }
                });
            } else {
                console.log("Day not found");
            }
        }
    })
})

export default router;