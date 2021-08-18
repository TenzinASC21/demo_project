//logo filling
let logo = document.getElementById("logo");
logo.addEventListener("mouseover", fill);

function fill(){
    logo.src="full_health.png";
}

logo.addEventListener("mouseout", empty);

function empty(){
    logo.src = "demo_logo.png";
}

//dropdown nav bar

//home
let home = document.getElementById("home");

let divider = document.getElementById("drop");

home.addEventListener("mouseover", dropHome);

function dropHome(){
    let homeInfo = document.createElement("p");
    homeInfo.setAttribute("id", "dropInfo");
    homeInfo.innerHTML= homeText;
    divider.appendChild(homeInfo);
}

home.addEventListener("mouseout", removeHomeInfo);

function removeHomeInfo(){
    let removeHomeInfo = document.getElementById("dropInfo")
    removeHomeInfo.remove();
}

//exercise

let exercise = document.getElementById("exercise");

exercise.addEventListener("mouseover", dropExercise);

function dropExercise(){
    let exerciseInfo = document.createElement("p");
    exerciseInfo.setAttribute("id", "dropInfo");
    exerciseInfo.innerHTML= exerciseText;
    divider.appendChild(exerciseInfo);
}

exercise.addEventListener("mouseout", removeExerciseInfo);

function removeExerciseInfo(){
    let removeExerciseInfo = document.getElementById("dropInfo");
    removeExerciseInfo.remove();
}

//nutrition

let nutrition = document.getElementById("nutrition");

nutrition.addEventListener("mouseover", dropNutrition);

function dropNutrition(){
    let nutritionInfo = document.createElement("p");
    nutritionInfo.setAttribute("id", "dropInfo");
    nutritionInfo.innerHTML = nutritionText;
    divider.appendChild(nutritionInfo);
}

nutrition.addEventListener("mouseout", removeNutritionInfo);

function removeNutritionInfo(){
    let removeNutritionInfo = document.getElementById("dropInfo");
    removeNutritionInfo.remove();
}

//contact us

let contact = document.getElementById("contact");

contact.addEventListener("mouseover", dropContact);

function dropContact(){
    let contactInfo = document.createElement("p");
    contactInfo.setAttribute("id", "dropInfo");
    contactInfo.innerHTML = contactText;
    divider.appendChild(contactInfo);
}

contact.addEventListener("mouseout", removeContactInfo);

function removeContactInfo(){
    let removeContactInfo = document.getElementById("dropInfo");
    removeContactInfo.remove();
}

//dropdown nav bar text
let homeText = "Learn about why physical health is crucial and about our mission to improve the quality of life.";
let exerciseText = "Learn about different exercises, how to perform them, and their benefits.";
let nutritionText = "Understand how to provide healthy nutrition for you body.";
let contactText = "Contact us via Email";

//exercise expand info
//Beginner
let div = document.getElementById("knee-push")
let kneePush = document.getElementById("knee-push-id");
let x = 1;

kneePush.addEventListener("click", expandKneePush);

function expandKneePush(){
    x*=-1;
    
    if (x==-1){
        let expandKneePush = document.createElement("p");
        expandKneePush.setAttribute("id", "expandKnee");
        expandKneePush.innerHTML = kneePushInfo;
        div.appendChild(expandKneePush);
        let gifKneePush = document.createElement("img");
        gifKneePush.setAttribute("id", "expandKneeIMG");
        gifKneePush.src = "https://media.self.com/photos/583c641ca8746f6e65a60c7e/master/w_1600%2Cc_limit/DIAMOND_PUSHUP_MOTIFIED.gif";
        div.appendChild(gifKneePush);
    }

    else if(x==1){
        let removeKneePush = document.getElementById("expandKnee");
        let removeKneePushIMG = document.getElementById("expandKneeIMG");
        removeKneePush.remove();
        removeKneePushIMG.remove();
    }
}

let jogDiv = document.getElementById("jog");
let jog = document.getElementById("jip");
let x2 = 1;

jog.addEventListener("click", expandJog);

function expandJog(){
    x2*=-1;

    if (x2==-1){
        let expandJog = document.createElement("p");
        expandJog.setAttribute("id", "expandJog");
        expandJog.innerHTML = jogInfo;
        jogDiv.appendChild(expandJog);
        let gifJog = document.createElement("img");
        gifJog.setAttribute("id", "expandJogIMG");
        gifJog.src = "https://thumbs.gfycat.com/AmazingSizzlingDaddylonglegs-max-1mb.gif";
        jogDiv.appendChild(gifJog);
    }

    else if (x2==1){
        let removeJog = document.getElementById("expandJog");
        let removeJogIMG = document.getElementById("expandJogIMG");
        removeJog.remove();
        removeJogIMG.remove();
    }
}

let plankDiv = document.getElementById("plank-div");
let plank = document.getElementById("plank");
let x3 = 1;

plank.addEventListener("click", expandPlank);

function expandPlank(){
    x3*=-1;
    
    if (x3==-1){
        let expandPlank = document.createElement("p");
        expandPlank.setAttribute("id", "expandPlank");
        expandPlank.innerHTML = plankInfo;
        plankDiv.appendChild(expandPlank);
        let gifPlank = document.createElement("img");
        gifPlank.setAttribute("id", "expandPlankIMG");
        gifPlank.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hdm119918mh15842-1545237096.png?crop=1.00xw:0.752xh;0,0.248xh&resize=640:*";
        plankDiv.appendChild(gifPlank);
    }

    else if(x3==1){
        let removePlank = document.getElementById("expandPlank");
        let removePlankIMG = document.getElementById("expandPlankIMG");
        removePlank.remove();
        removePlankIMG.remove();
    }
}

//Intermediate
let pushUpDiv = document.getElementById("push-up-div");
let pushUp = document.getElementById("push-up");
let y = 1;

pushUp.addEventListener("click", expandPushUp)

function expandPushUp(){
    y*=-1;

    if (y==-1){
        let expandPushUp = document.createElement("p");
        expandPushUp.setAttribute("id", "expandPushUp");
        expandPushUp.innerHTML = pushUpInfo;
        pushUpDiv.appendChild(expandPushUp);
        let gifPushUp = document.createElement("img");
        gifPushUp.setAttribute("id", "expandPushUpIMG");
        gifPushUp.src = "https://images.squarespace-cdn.com/content/v1/5895fa91440243be53fb3d52/1492382208702-SVT0091B6E9NQMKKZNNC/image-asset.gif";
        pushUpDiv.appendChild(gifPushUp);
    }

    else if (y==1){
        let removePushUp = document.getElementById("expandPushUp");
        let removePushUpIMG = document.getElementById("expandPushUpIMG");
        removePushUp.remove();
        removePushUpIMG.remove();
    }
}

let squatDiv = document.getElementById("squat-div");
let squat = document.getElementById("squat");
let y2 = 1;

squat.addEventListener("click", expandSquat);

function expandSquat(){
    y2*=-1;

    if (y2==-1){
        let expandSquat = document.createElement("p");
        expandSquat.setAttribute("id", "expandSquat");
        expandSquat.innerHTML = squatInfo;
        squatDiv.appendChild(expandSquat);
        let gifSquat = document.createElement("img");
        gifSquat.setAttribute("id", "expandSquatIMG");
        gifSquat.src = "https://thumbs.gfycat.com/UnequaledVelvetyBubblefish-size_restricted.gif";
        squatDiv.appendChild(gifSquat);
    }

    else if (y2==1){
        let removeSquat = document.getElementById("expandSquat");
        let removeSquatIMG = document.getElementById("expandSquatIMG");
        removeSquat.remove();
        removeSquatIMG.remove();
    }
}

let crunchesDiv = document.getElementById("crunches-div");
let crunches = document.getElementById("crunches");
let y3 = 1;

crunches.addEventListener("click", expandCrunches);

function expandCrunches(){
    y3*=-1;

    if (y3==-1){
        let expandCrunches = document.createElement("p");
        expandCrunches.setAttribute("id", "expandCrunches");
        expandCrunches.innerHTML = crunchesInfo;
        crunchesDiv.appendChild(expandCrunches);
        let gifCrunches = document.createElement("img");
        gifCrunches.setAttribute("id", "expandCrunchesIMG");
        gifCrunches.src = "https://media0.giphy.com/media/xT0xekSmUwcoD6SxzO/200.gif";
        crunchesDiv.appendChild(gifCrunches);
    }

    else if (y3==1){
        let removeCrunches = document.getElementById("expandCrunches");
        let removeCrunchesIMG = document.getElementById("expandCrunchesIMG");
        removeCrunches.remove();
        removeCrunchesIMG.remove();
    }
}

//Advanced

let declineDiv = document.getElementById("decline-div");
let decline = document.getElementById("decline");
let z = 1;

decline.addEventListener("click", expandDecline);

function expandDecline(){
    z *= -1;

    if (z==-1){
        let expandDecline = document.createElement("p");
        expandDecline.setAttribute("id", "expandDecline");
        expandDecline.innerHTML = declineInfo;
        declineDiv.appendChild(expandDecline);
        let gifDecline = document.createElement("img");
        gifDecline.setAttribute("id", "expandDeclineIMG");
        gifDecline.src = "https://cdn.prod.openfit.com/uploads/2018/04/bb_stability-ball_decline-push-up.gif";
        declineDiv.appendChild(gifDecline);
    }

    else if (z==1){
        let removeDecline = document.getElementById("expandDecline");
        let removeDeclineIMG = document.getElementById("expandDeclineIMG");
        removeDecline.remove();
        removeDeclineIMG.remove();
    }
}

let weightDiv = document.getElementById("weight-div");
let weight = document.getElementById("weight");
let z2 = 1;

weight.addEventListener("click", expandWeight);

function expandWeight(){
    z2 *= -1;

    if (z2==-1){
        let expandWeight = document.createElement("p");
        expandWeight.setAttribute("id", "expandWeight");
        expandWeight.innerHTML = weightInfo;
        weightDiv.appendChild(expandWeight);
        let gifWeight = document.createElement("img");
        gifWeight.setAttribute("id", "expandWeightIMG");
        gifWeight.src = "https://images.ctfassets.net/5615tdzw3m8i/qXRzHphtieV8k22AEUArD/b56d6663c96b04e3c3fee78a07b9bc26/ezgif.com-optimize.gif";
        weightDiv.appendChild(gifWeight);
    }

    else if (z2==1){
        let removeWeight = document.getElementById("expandWeight");
        let removeWeightIMG = document.getElementById("expandWeightIMG");
        removeWeight.remove();
        removeWeightIMG.remove();
    }
}




//exercise info
//Beginner
let kneePushInfo = "A knee push up should be performed on the floor with your arms supporting you shoulder width apart. The knees are used to support you from below. Then bend your arm to about 90 degrees. Hold that position and push back up. This exercise helps develop the chest and tricep muscles as well as strengthen your elbow joints.";
let jogInfo = "Jogging in place is a home cardio exercise that requires minimal space. This is an easier alternative to most cardio exercises and helps develop the heart and stamina. Cardio exercise burn calories efficiently as your body is always in motion.";
let plankInfo = "The plank is a position that is maintained for a certain period of time. Similar to a push up, the body is support by the feet and arms and is maintained. The plank activates the core and helps build abdominal strength and muscle.";

//Intermediate
let pushUpInfo = "Push ups are performed on the floor with your arms and feet supporting you. Your body should be parallel to the floor with a straight back. The movement involves bending your arms to a 90 degrees and pushing back up. Push ups greatly train the chest, triceps, and it enhances joints. ";
let squatInfo = "The squat is a fundamental exercise for the legs but it is quite difficult to do as a beginner. During the squat, your legs should be spread apart and your back should always stay straight. The movement involves the bending of your knees to build the tension in your legs. The squat trains the core, butt muscles, quad muscles, and activates the hamstrings";
let crunchesInfo = "Crunches are a variation of sit-ups that focus more on the activation of the core. Lay on your back with your feet together and bent. Bring your body up 30% of the way. Unlike the sit-up, crunches are a reduced range of motion as it prevents lower back pain and builds abdominal strength and endurance.";

//Advanced
let declineInfo = "Decline push ups are a push up variation where your foot placement is at a higher elevation that your hand placement. The movement remains the same with the arm, however, it become more difficult as a result of the elevation. This exercise targets the upper chest, triceps, and shoulder, as well as it activates the core.";
let weightInfo = "Weighted exercises are the best exercises to build strength, however, the are nearly impossible to do if you do not have the fundamentals down. Weighted exercises can be any exercise such as a push up or squat with extra weight as resistance incorporated. It will require more energy and strength, therefore, creating a more difficult and body engaging workout.";