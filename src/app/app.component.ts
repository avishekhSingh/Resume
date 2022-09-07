import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume Apps';

  //! Create a object for resume
  person = {
    name: "AVISHEKH KUMAR SINGH",
    linkedIn: "https://www.linkedin.com/in/abhishek-kumar-singh-899b47199",
    email:"abhishekkumarsingh598@gmail.com",
    mobileNo: 8809071490,
    birth: "08/08/1997",
    gender: "Male",
    location: "Bhopal",
    carrierObjective:"To succeed in an environment of growth and excellence, obtain a motivating and challenging position in an organization and utilize my knowledge and skills to be a valuable asset to the organization.",
    hobbies:["Coading","Exploring new things","Gym"],
    summary:["Highly motivated Technical Support professional","Committed to Quality and Excellence.","Batchelor of Engineering (BE) focused in Mechanical stream from RGPV university","Strong Verbal, Listening and Written skills","Able to negotiate and problem solve quickly, accurately, and efficiently","Adept at multitasking to achieve individual and team goals"]
  }
  skill={
    codingSkill: ["HTML", "CSS", "JavaScript", "Angular", "Java", "C/C++"],
    otherSkill: ["Good Communication", "Computer operator", "Problem solving"],
    tools: ["Microsoft", "WordPress", "VS code", "AutoCAD"]
  }
  education = {
    matric: {
      qualification: "Matriculation",
      board: "CBSE",
      institute: "Delhi Model Public School",
      cgpa: "9.6 CGPA",
      year: 2012,
      state: "Bihar",
      stream: "All subject",
    },
    intermediate: {
      qualification: "Intermediate",
      board: "BSEB",
      institute: "Lakha Interstariya Vidyalaya Barmi",
      marks: 334,
      percentage: "66.8 %",
      year: 2015,
      state: "Bihar",
      stream: "Science",
    },
    degree: {
      qualification: "Bachelor of Engineering",
      board: "RGPV",
      institute: "Technocrats Institutes Of Technology",
      cgpa: "7.45 CGPA",
      year: 2019,
      state: "Madhaya Pradesh",
      stream: "Mechanical",
    }
  }
  projects = {
    collegeProject: {
      projectName: "Solar panel lights",
      projectWork: ["Arranged pole for providing height", "Assembled all lights and battery with proper connection with solar plates"],
      objective: "Save the electricity"
    },
    collegeInternship: {
      projectName: "Fabrication in Boiler",
      projectWork: "Make required shape boiler",
      objective: "Super saturated steam produced by boiler can be used for industry purpose"
    },
    codingProject1: {
      projectName: "E-commerce webpage design",
      projectWork: "Create HTML,CSS,JavaScript for E-commerse webpage",
      objective: "Design working webpage for E-commerse webpage",
      github:"https://avishekhsingh.github.io/E-commerce.io/"
    },
    codingProject2: {
      projectName: "E-commerce by Java",
      projectWork: "Write Java codes for E-commerce sites",
      objective: "Java projects building"
    }
  }
  date= new Date;
  today=`${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}`
  currentInfo={
    date:this.today,
    currentLocation:"Bhopal",
  }
}
