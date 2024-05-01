var myResume={
    Basics:{
        Name: "Charitra",
        Email: "vcharitrav25@gmail.com",
        PhoneNumber: 9500000009,
        Degree: "B.E",
        Location: {
            Address: "15/16 Sainath Enclave ShenoyNagar",
            PostalCode: 600030,
            City: "Chennai",
            State: "Tamilnadu",
            Country: "India"
        },
        Profiles:{
            Wensite:"https://www.linkedin.com/in/charitra-61b59a174/",
            Github:"https://github.com/CharitraV/Day5.git"
        },
        Education:{
              Institution: "SA Engineering College",
              Department: "Electrinicn and Connumication",
              StudyType: "fulltime",
              BatchStartYea: 2018,
              BatchEndYear: 2022,
              GPA: 8.44,
              Schooling:"Kendiya Vidyalaya"
        }        
    },
    Work:       
      [{Company: "Avasoft"},{
      Position: "Software Engineer"},{
      StartDate: "2020-9-01"},
      {EndDate: "2022-12-25"}]



      ,
    Languages: ["English","Hindi","Tamil","telugu"],
    HardSkill:[
        "IT Asset Management","Hardware Asset Management","Software Asset Management",
        "CSA- System Administrator in ServiceNow", "Basics of Javascript","Basics of React and Node.js"],
    SoftSkills:["Communication","Observation","Understanding of Human Behaviour",
        "Good Listener","Decision making"]
  }

//for in 
for (var key in myResume.Basics){
    console.log(myResume.Basics[key]);
}

//for loop
console.log("Work details are as following: ")
for (var i=0;i< myResume.Work.length; i++){
    console.log(myResume.Work[i])
}

// for of  
console.log("Languages known are as following: ");
for (details of myResume.Languages){
    console.log(details);
}

 //for Each
 console.log("Hardware Skille  are as following: ");
 myResume.HardSkill.forEach(function(obj,index) { console.log((index+1) ," :",obj); });


console.log("Software Skills are as following: ");
myResume.SoftSkills.forEach(function(student, index) {
    console.log((index+1) ," :",student)    
    })
