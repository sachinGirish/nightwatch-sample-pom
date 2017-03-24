module.exports = {
    Elements:{
        personalInfo:{
                firstName:'//*[@name="firstname"]',
                lastName:'//*[@name="lastname"]',
                sex:'//*[@id="sex-0"]'
        },
        professionalInfo:{
                yearsOfExperience:'//*[@id="exp-5"]',
                datePicker:'//*[@id="datepicker"]',
                professionManual:'//*[@id="profession-0"]',
                professionalAutomation:'//*[@id="profession-0"]'

        },
        uploadFile:{
                browse:".//*[@id='photo']"

        },
        skills:{
                tool:'//*[@id="tool-2"]',
                continent:'document.getElementById("continents").options[3].selected=true',
                seleniumCommands:'document.getElementById("selenium_commands").options[3].selected=true'
        },
        button:{
                submit:'//*[@id="submit"]'

        }
        
    }

}
   