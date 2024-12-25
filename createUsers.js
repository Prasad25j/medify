// require("dotenv").config();
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bcrypt from "bcrypt"

const app = express()
const PORT = 4002;
const url = "mongodb://localhost:27017/Medify";

const data = [
    // {
    //     name: "Vikas Choudhary",
    //     email: "vikas.choudhary@nitt.edu",
    //     rollno: "P123456",
    //     bg: "A-",
    //     identity: "pharmacist",
    //     password: "password123"
    // },
    // {
    //     name: "Sneha Reddy",
    //     email: "sneha.reddy@nitt.edu",
    //     rollno: "P123457",
    //     bg: "B-",
    //     identity: "pharmacist",
    //     password: "password123"
    // },
    // {
    //     name: "Meera Rao",
    //     email: "meera.rao@nitt.edu",
    //     rollno: "N123456",
    //     bg: "A+",
    //     identity: "nurse",
    //     password: "password123"
    // },
    // {
    //     name: "Pooja Das",
    //     email: "pooja.das@nitt.edu",
    //     rollno: "N123457",
    //     bg: "B+",
    //     identity: "nurse",
    //     password: "password123"
    // },
    // {
    //     name: "Rohan Nair",
    //     email: "rohan.nair@nitt.edu",
    //     rollno: "N123458",
    //     bg: "O+",
    //     identity: "nurse",
    //     password: "password123"
    // },
    // {
    //     name: "Sonal Joshi",
    //     email: "sonal.joshi@nitt.edu",
    //     rollno: "N123459",
    //     bg: "AB+",
    //     identity: "nurse",
    //     password: "password123"
    // },
    // {
    //     name: "Riya Sharma",
    //     email: "riya.sharma@nitt.edu",
    //     rollno: "R123456",
    //     bg: "B+",
    //     identity: "receptionist",
    //     password: "password123"
    // },
    // {
    //     name: "Kunal Gupta",
    //     email: "kunal.gupta@nitt.edu",
    //     rollno: "R123457",
    //     bg: "O+",
    //     identity: "receptionist",
    //     password: "password123"
    // },
    // {
    //     name: "Anjali Verma",
    //     email: "anjali.verma@nitt.edu",
    //     rollno: "R123458",
    //     bg: "A-",
    //     identity: "receptionist",
    //     password: "password123"
    // },
    // {
    //     name: "Dr. Aditya Menon",
    //     email: "aditya.menon@nitt.edu",
    //     rollno: "D123456",
    //     bg: "A+",
    //     identity: "doctor",
    //     password: "password123"
    // },
    // {
    //     name: "Dr. Bhavya Iyer",
    //     email: "bhavya.iyer@nitt.edu",
    //     rollno: "D123457",
    //     bg: "B+",
    //     identity: "doctor",
    //     password: "password123"
    // },
    // {
    //     name: "Dr. Charu Sinha",
    //     email: "charu.sinha@nitt.edu",
    //     rollno: "D123458",
    //     bg: "O+",
    //     identity: "doctor",
    //     password: "password123"
    // },
    // {
    //     name: "Dr. Deepak Kaur",
    //     email: "deepak.kaur@nitt.edu",
    //     rollno: "D123459",
    //     bg: "AB+",
    //     identity: "doctor",
    //     password: "password123"
    // },
    // {
    //     name: "Dr. Esha Pillai",
    //     email: "esha.pillai@nitt.edu",
    //     rollno: "D123460",
    //     bg: "A-",
    //     identity: "doctor",
    //     password: "password123"
    // }
    {
        name: "Prasad Pachbhai",
        email: "prasad@nitt.edu",
        rollno: "INT1234",
        bg: "a+",
        identity: "student",
        password: "prasad",
    }
    // {
    //     name: "student2",
    //     email: "student2@nitt.edu",
    //     rollno: "INT1235",
    //     bg: "a+",
    //     identity: "student",
    //     password: "student2",
    // },
    // {
    //     name: "Aarav Kumar",
    //     email: "aarav.kumar@nitt.edu",
    //     rollno: "123456",
    //     bg: "A+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Bhavna Patel",
    //     email: "bhavna.patel@nitt.edu",
    //     rollno: "INT1234",
    //     bg: "B+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Chirag Sharma",
    //     email: "chirag.sharma@nitt.edu",
    //     rollno: "EXY1234",
    //     bg: "O+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Divya Singh",
    //     email: "divya.singh@nitt.edu",
    //     rollno: "K12345",
    //     bg: "AB+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Esha Gupta",
    //     email: "esha.gupta@nitt.edu",
    //     rollno: "M12345",
    //     bg: "A-",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Farhan Khan",
    //     email: "farhan.khan@nitt.edu",
    //     rollno: "S12345",
    //     bg: "B-",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Garima Mehta",
    //     email: "garima.mehta@nitt.edu",
    //     rollno: "Y12345",
    //     bg: "O-",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Harsh Desai",
    //     email: "harsh.desai@nitt.edu",
    //     rollno: "123457",
    //     bg: "AB-",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Isha Kapoor",
    //     email: "isha.kapoor@nitt.edu",
    //     rollno: "INT2345",
    //     bg: "A+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Jay Mehta",
    //     email: "jay.mehta@nitt.edu",
    //     rollno: "EXY2345",
    //     bg: "B+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Kiran Joshi",
    //     email: "kiran.joshi@nitt.edu",
    //     rollno: "K23456",
    //     bg: "O+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Lakshmi Nair",
    //     email: "lakshmi.nair@nitt.edu",
    //     rollno: "M23456",
    //     bg: "AB+",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Manish Verma",
    //     email: "manish.verma@nitt.edu",
    //     rollno: "S23456",
    //     bg: "A-",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Nidhi Rao",
    //     email: "nidhi.rao@nitt.edu",
    //     rollno: "Y23456",
    //     bg: "B-",
    //     identity: "student",
    //     password: "password123"
    // },
    // {
    //     name: "Omkar Bhat",
    //     email: "omkar.bhat@nitt.edu",
    //     rollno: "123458",
    //     bg: "O-",
    //     identity: "student",
    //     password: "password123"
    // }
];



const connectDB = () => {
    mongoose.set("strictQuery", true);
    return mongoose
        .connect(url)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => console.log(err));
};

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    rollno: String,
    bg: String,
    identity: String,
    password: String,
});


const Medical_history = new mongoose.Schema({
    name: String,
    rollno:String,
    count:Number,
    medical_history:[{
        date: Date,
        remark: String,
        symptoms: String,
        doctor: String,
        medication:[{name_of_medicine:String,
                    dosage:String,
                    days:Number}],
        tests: [String],
        vitals_Blood_pressure: String,
        vitals_Oxygen: String,
        vitals_temperature: Number,
        completed: Boolean,
        completed_doc: Boolean
    }],
    
});


const Meds =  mongoose.model('Med', Medical_history);
const User = mongoose.model("User", userSchema);

async function precompute() {
    try {
        for (let i = 0; i < data.length; ++i) {
            const { name, email, rollno, bg, identity, password } = data[i];
            const hashedPwd = await bcrypt.hash(password, 10);

            const payload = {
                name,
                email,
                rollno,
                bg,
                identity,
                password: hashedPwd,
            };

            const pay = {
                name,
                rollno, 
                count: 0,
                medical_history: [],
                
            }

            const user = await User.create(payload);
            const med = await Meds.create(pay);
            console.log(`User ${i + 1} Added`);
        }
    } catch (err) {
        console.log("Error Adding Users. Delete database and try to add again");
        process.exit(-1);
    }
}

app.listen(PORT, async (req, res) => {
    console.log(`Server is listening on ${PORT}`);
    console.log("connecting...")
    await connectDB();
    console.log("YES");
    await precompute();
    console.log("Users Added Successfully");
    process.exit(0);
});