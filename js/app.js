async function apiRequest(){
    const age = document.getElementById("age-group").value
    try{
        const response = await fetch(`https://pedi-vital-signs-api.herokuapp.com/api/${age}`)
        const data = await response.json()

        document.querySelector(".heart-rate").innerText = data.heartRate + " bpm"
        document.querySelector(".respiratory-rate").innerText = data.respiratoryRate + " breaths/min"
        document.querySelector(".systolic").innerText = data.systolic + " mmHg"
        document.querySelector(".diastolic").innerText = data.diastolic + " mmHg"
    } catch(error){
        console.log(error)
    }
}



