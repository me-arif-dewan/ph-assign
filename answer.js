// Question: 1

function describeValue(value) {
  let type;

  if (value === null) {
    type = "null";
  } else if (Array.isArray(value)) {
    type = "array";
  } else {
    type = typeof value;
  }

  return `${type} | ${value ? "truthy" : "falsy"}`;
}

console.log("==========================");
console.log(describeValue("0"));
console.log(describeValue(NaN));
console.log(describeValue(null));
console.log(describeValue(0));
console.log(describeValue(10));
console.log(describeValue(""));
console.log(describeValue(false));
console.log(describeValue([]));
console.log(describeValue({}));

// Question: 2

function getDayType (day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

console.log("==========================");
console.log(getDayType("Friday"));
console.log(getDayType("Sunday"));
console.log(getDayType("Christmas Day"));

// Question: 3

function validateUsername(username) {
    if(username.length < 4) {
        return "Too Short";
    }
    if(username.toLowerCase().includes(" ")) {
        return "No Space Allowed";
    }
    if(username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}

console.log("==========================");
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));

// Question: 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let defaultFare = 50;
    let defaultDistance = 2;
    let waitingFareEveryMinute = 2;
    let nightFareMultiplier = 1.2;

    if(distance > defaultDistance) {
        defaultFare += (distance - defaultDistance) * 15;
    }

    let waitingFare = waitingMinutes * waitingFareEveryMinute;

    let totalFare = defaultFare + waitingFare;

    if(isNight) {
        totalFare *= nightFareMultiplier;
    }

    return totalFare;
}

console.log("==========================");
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));

// Question: 5

function getChaseVerdict(target, scored, ballsLeft) {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;

    if(requiredRate <= 6) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    } else if(requiredRate >6 && requiredRate <= 12) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    } else {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }
}

console.log("==========================");
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));