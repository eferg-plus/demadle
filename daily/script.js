var artist = "Twenty One Pilots";
var twitter = "@eferg0064";
const audioPlayer = document.getElementById("audioPlayer");

// Create a new Date object
const today = new Date();

// Get individual components of the date
const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-indexed, so add 1
const day = today.getDate();

// Create a string representation of today's date
const todaysSongSeed = year*365.25+(month*30.4375)+day;
const todaysIndexSeed = 3.141592*todaysSongSeed;

console.log(todaysSongSeed);
console.log(todaysIndexSeed);

// Set the seed value
const seedSongValue = `${todaysSongSeed}`;
const seedIndexValue = `${todaysIndexSeed}`;

// Create a seeded random number generator
const rngSong = new Math.seedrandom(seedSongValue);
const rngIndex = new Math.seedrandom(seedIndexValue);

// Generate a pseudo-random number between 0 and 1
const randomNumberSong = rngSong();
const randomNumberIndex = rngIndex();

console.log(randomNumberSong);
console.log(randomNumberIndex);

const songFiles = [
  "audio/implicit_demand_for_proof.mp3",
  "audio/fall_away.mp3",
  "audio/the_pantaloon.mp3",
  "audio/addict_with_a_pen.mp3",
  "audio/friend_please.mp3",
  "audio/march_to_the_sea.mp3",
  "audio/johnny_boy.mp3",
  "audio/oh_ms_believer.mp3",
  "audio/air_catcher.mp3",
  "audio/trapdoor.mp3",
  "audio/a_car_a_torch_a_death.mp3",
  "audio/taxi_cab.mp3",
  "audio/before_you_start_your_day.mp3",
  "audio/isle_of_flightless_birds.mp3",
  /*
  "audio/audio_slowtown.mp3",
  "audio/audio_forest.mp3",
  "audio/audio_glowing_eyes.mp3",
  "audio/audio_kitchen_sink.mp3",
  "audio/audio_anathema.mp3",
  "audio/audio_lovely.mp3",
  "audio/audio_ruby.mp3",
  "audio/audio_be_concerned.m4a",
  "audio/audio_clear.mp3",
  */
  "audio/ode_to_sleep.mp3",
  "audio/holding_on_to_you.mp3",
  "audio/migraine.mp3",
  "audio/house_of_gold.mp3",
  "audio/car_radio.mp3",
  "audio/semi_automatic.mp3",
  "audio/screen.mp3",
  "audio/the_run_and_go.mp3",
  "audio/fake_you_out.mp3",
  "audio/guns_for_hands.mp3",
  "audio/trees.mp3",
  "audio/truce.mp3",
  "audio/heavydirtysoul.mp3",
  "audio/stressed_out.mp3",
  "audio/ride.mp3",
  "audio/fairly_local.mp3",
  "audio/tear_in_my_heart.mp3",
  "audio/lane_boy.mp3",
  "audio/the_judge.mp3",
  "audio/doubt.mp3",
  "audio/polarize.mp3",
  "audio/we_dont_believe_whats_on_tv.mp3",
  "audio/message_man.mp3",
  "audio/hometown.mp3",
  "audio/not_today.mp3",
  "audio/goner.mp3",
  "audio/heathens.mp3",
  "audio/cancer.mp3",
  "audio/jumpsuit.mp3",
  "audio/levitate.mp3",
  "audio/morph.mp3",
  "audio/my_blood.mp3",
  "audio/chlorine.mp3",
  "audio/smithereens.mp3",
  "audio/neon_gravestones.mp3",
  "audio/the_hype.mp3",
  "audio/nico_and_the_niners.mp3",
  "audio/cut_my_lip.mp3",
  "audio/bandito.mp3",
  "audio/pet_cheetah.mp3",
  "audio/legend.mp3",
  "audio/leave_the_city.mp3",
  "audio/level_of_concern.mp3",
  "audio/good_day.mp3",
  "audio/choker.mp3",
  "audio/shy_away.mp3",
  "audio/the_outside.mp3",
  "audio/saturday.mp3",
  "audio/never_take_it.mp3",
  "audio/mulberry_street.mp3",
  "audio/formidable.mp3",
  "audio/bounce_man.mp3",
  "audio/no_chances.mp3",
  "audio/redecorate.mp3",
  "audio/stream_choker.mp3",
  "audio/stream_mulberry_street.mp3",
  "audio/stream_lane_boy.mp3",
  "audio/stream_shy_away.mp3",
  "audio/stream_the_outside.mp3",
  "audio/stream_heathens.mp3",
  "audio/stream_jumpsuit.mp3",
  "audio/stream_saturday.mp3",
  "audio/stream_never_take_it.mp3",
  "audio/overcompensate.mp3",
  "audio/next_semester.mp3",
  "audio/backslide.mp3",
  "audio/midwest_indigo.mp3",
  "audio/routines_in_the_night.mp3",
  "audio/vignette.mp3",
  "audio/the_craving_j.mp3",
  "audio/the_craving_s.mp3",
  "audio/lavish.mp3",
  "audio/navigating.mp3",
  "audio/snap_back.mp3",
  "audio/oldies_station.mp3",
  "audio/at_the_risk_of_feeling_dumb.mp3",
  "audio/paladin_strait.mp3",
  "audio/mtv_stressed_out.mp3",
  "audio/mtv_tear_in_my_heart.mp3",
  "audio/mtv_house_of_gold_lane_boy.mp3",
  "audio/mtv_shy_away.mp3",
  "audio/mtv_ride_nico_and_the_niners.mp3",
  "audio/mtv_car_radio_heathens.mp3",
  "audio/the_line.mp3",
  "audio/city_walls.mp3",
  "audio/rawfear.mp3",
  "audio/drum_show.mp3",
  "audio/garbage.mp3",
  "audio/the_contract.mp3",
  "audio/downstairs.mp3",
  "audio/robot_voices.mp3",
  "audio/center_mass.mp3",
  "audio/cottonwood.mp3",
  "audio/one_way.mp3",
  "audio/days_lie_dormant.mp3",
  "audio/tally.mp3",
  "audio/intentions.mp3",
  "audio/drag_path.mp3",
];
const songTitles = [
  "Implicit Demand For Proof",
  "Fall Away",
  "The Pantaloon",
  "Addict With A Pen",
  "Friend, Please",
  "March To The Sea",
  "Johnny Boy",
  "Oh Ms Believer",
  "Air Catcher",
  "Trapdoor",
  "A Car, A Torch, A Death",
  "Taxi Cab",
  "Before You Start Your Day",
  "Isle Of Flightless Birds",
  /*
  "Slowtown",
  "Forest",
  "Glowing Eyes",
  "Kitchen Sink",
  "Anathema",
  "Lovely",
  "Ruby",
  "Be Concerned",
  "Clear",
  */
  "Ode to Sleep",
  "Holding on to You",
  "Migraine",
  "House of Gold",
  "Car Radio",
  "Semi-Automatic",
  "Screen",
  "The Run and Go",
  "Fake You Out",
  "Guns for Hands",
  "Trees",
  "Truce",
  "Heavydirtysoul",
  "Stressed Out",
  "Ride",
  "Fairly Local",
  "Tear in My Heart",
  "Lane Boy",
  "The Judge",
  "Doubt",
  "Polarize",
  "We Don't Believe What's on TV",
  "Message Man",
  "Hometown",
  "Not Today",
  "Goner",
  "Heathens",
  "Cancer",
  "Jumpsuit",
  "Levitate",
  "Morph",
  "My Blood",
  "Chlorine",
  "Smithereens",
  "Neon Gravestones",
  "The Hype",
  "Nico and the Niners",
  "Cut My Lip",
  "Bandito",
  "Pet Cheetah",
  "Legend",
  "Leave the City",
  "Level of Concern",
  "Good Day",
  "Choker",
  "Shy Away",
  "The Outside",
  "Saturday",
  "Never Take It",
  "Mulberry Street",
  "Formidable",
  "Bounce Man",
  "No Chances",
  "Redecorate",
  "Choker / Stressed Out / Migraine / Morph / Holding On To You - Livestream Experience",
  "Mulberry Street - Livestream Experience",
  "Lane Boy / Redecorate / Chlorine - Livestream Experience",
  "Shy Away - Livestream Experience",
  "The Outside - Livestream Experience",
  "Heathens / Trees - Livestream Experience",
  "Jumpsuit / Heavydirtysoul - Livestream Experience",
  "Saturday / Level of Concern / Ride / Car Radio - Livestream Experience",
  "Never Take It - Livestream Experience",
  "Overcompensate",
  "Next Semester",
  "Backslide",
  "Midwest Indigo",
  "Routines In The Night",
  "Vignette",
  "The Craving (Jenna's Version)",
  "The Craving (Single Version)",
  "Lavish",
  "Navigating",
  "Snap Back",
  "Oldies Station",
  "At The Risk Of Feeling Dumb",
  "Paladin Strait",
  "Stressed Out - MTV Unplugged",
  "Tear in My Heart - MTV Unplugged",
  "House of Gold / Lane Boy - MTV Unplugged",
  "Shy Away = MTV Unplugged",
  "Ride / Nico And The Niners - MTV Unplugged",
  "Car Radio / Heathens - MTV Unplugged",
  "The Line",
  "City Walls",
  "RAWFEAR",
  "Drum Show",
  "Garbage",
  "The Contract",
  "Downstairs",
  "Robot Voices",
  "Center Mass",
  "CottonWood",
  "One Way",
  "Days Lie Dormant",
  "Tally",
  "Intentions",
  "Drag Path",

  // Add More Song Titles
];
let buttonPressed = false;
// Initialize variables outside the function
let startTime = 0;
let listenTime = 1;
let guessNumber = 1;
let maxGuesses = 6;
let todaysSong = "";
let guess = "";
let guessing = true;
let songPlaying = false;

// Set the stats
let gamesCompletedIn1GuessD = 0;
let gamesCompletedIn2GuessesD = 0;
let gamesCompletedIn3GuessesD = 0;
let gamesCompletedIn4GuessesD = 0;
let gamesCompletedIn5GuessesD = 0;
let gamesCompletedIn6GuessesD = 0;
let gamesFailedD = 0;
let totalCompletedGames = 1;

let lastDay = 0;
let guess1Text = "";
let retrievedGuess = "";
// Set the total duration for the progress ring (30 seconds)
let totalDuration = 30;
const guess1Element = document.getElementById("Guess1");
const guess2Element = document.getElementById("Guess2");
const guess3Element = document.getElementById("Guess3");
const guess4Element = document.getElementById("Guess4");
const guess5Element = document.getElementById("Guess5");
const guess6Element = document.getElementById("Guess6");
const emptyGuess1Element = document.getElementById("emptyGuess1");
const emptyGuess2Element = document.getElementById("emptyGuess2");
const emptyGuess3Element = document.getElementById("emptyGuess3");
const emptyGuess4Element = document.getElementById("emptyGuess4");
const emptyGuess5Element = document.getElementById("emptyGuess5");
const emptyGuess6Element = document.getElementById("emptyGuess6");
const guessD1Line = document.getElementById("guessD1Line");
const guessD2Line = document.getElementById("guessD2Line");
const guessD3Line = document.getElementById("guessD3Line");
const guessD4Line = document.getElementById("guessD4Line");
const guessD5Line = document.getElementById("guessD5Line");
const guessD6Line = document.getElementById("guessD6Line");
const guessDFLine = document.getElementById("guessDFLine");
const amountCompleted1 = document.getElementById("amountCompleted1");
const amountCompleted2 = document.getElementById("amountCompleted2");
const amountCompleted3 = document.getElementById("amountCompleted3");
const amountCompleted4 = document.getElementById("amountCompleted4");
const amountCompleted5 = document.getElementById("amountCompleted5");
const amountCompleted6 = document.getElementById("amountCompleted6");
const amountCompletedF = document.getElementById("amountCompletedF");
const statsText = document.getElementById("statsText");
const statsPopup = document.getElementById("statsPopup");

audioPlayer.addEventListener("timeupdate", pauseTime);

// Progress Ring
const progressRing = document.querySelector(".progress-ring");
// Progress Circle (within the progress ring)
const progressCircle = progressRing.querySelector(".progress-circle");
const playButton = document.getElementById("button");

// Function to play a random MP3
function playRandom() {
  // Clear existing event listener to avoid unexpected behavior
  audioPlayer.removeEventListener("loadedmetadata", onMetadataLoaded);

  if (!buttonPressed) {
    // Set the source of the audio element to a random MP3 file
    const randomIndex = Math.floor(randomNumberSong * songFiles.length);
    const selectedFile = songFiles[randomIndex];
    todaysSong = songTitles[randomIndex];
    audioPlayer.src = selectedFile;

    // Add the event listener for loadedmetadata
    audioPlayer.addEventListener("loadedmetadata", onMetadataLoaded);

    // Update the playing state
    buttonPressed = true;
  } else {
    // If the button was pressed before, pause and restart at the same start time
    if (guessing == true) {
      audioPlayer.pause();
      audioPlayer.currentTime = startTime;
      audioPlayer.play();
    } else {
      if (songPlaying == false) {
        audioPlayer.play();
        songPlaying = true;
      } else {
        audioPlayer.currentTime = startTime;
        audioPlayer.pause();
        songPlaying = false;
      }
    }
  }
  pauseTime();
}

//Local Storage Stuff

function updateStatsInLocalStorage() {
  // Store stats in local storage
  localStorage.setItem("gamesCompletedIn1GuessD", gamesCompletedIn1GuessD);
  localStorage.setItem("gamesCompletedIn2GuessesD", gamesCompletedIn2GuessesD);
  localStorage.setItem("gamesCompletedIn3GuessesD", gamesCompletedIn3GuessesD);
  localStorage.setItem("gamesCompletedIn4GuessesD", gamesCompletedIn4GuessesD);
  localStorage.setItem("gamesCompletedIn5GuessesD", gamesCompletedIn5GuessesD);
  localStorage.setItem("gamesCompletedIn6GuessesD", gamesCompletedIn6GuessesD);
  localStorage.setItem("gamesFailedD", gamesFailedD);
  updateStatLines()
}
function updateDailyInLocalStorage() {
  console.log(`localStorage Opened`)
  if (localStorage.getItem("lastDay") !== null) {
    lastDay = localStorage.getItem("lastDay");
    console.log(`localStorage Got ${lastDay}`)
  }
  if (lastDay !== day) {
    guessing = true;
    localStorage.setItem("guessing", guessing);
  } else {
      if (localStorage.getItem("guess1Text") !== null) {
        guess1Text = retriveSavedText("guess1Text");
        console.log(`localStorage Got text ${guess1Text}`);
        guess1Element.innerHTML = guess1Text;
      } else {
        console.log(`guess1Text returned ${guess1Text}`);
      }
    }
  console.log(`function ran ${guess1Text}`);
}
function saveTextLoacally(variable, value) {
  localStorage.setItem("guess1Text", value);
}
function retriveSavedText(variable){
  return localStorage.getItem(variable);
}
function loadStatsFromLocalStorage() {
  // Load stats from local storage
  if (localStorage.getItem("gamesCompletedIn1GuessD") !== null) {
    gamesCompletedIn1GuessD = parseInt(localStorage.getItem("gamesCompletedIn1GuessD"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn2GuessesD") !== null) {
    gamesCompletedIn2GuessesD = parseInt(localStorage.getItem("gamesCompletedIn2GuessesD"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn3GuessesD") !== null) {
    gamesCompletedIn3GuessesD = parseInt(localStorage.getItem("gamesCompletedIn3GuessesD"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn4GuessesD") !== null) {
    gamesCompletedIn4GuessesD = parseInt(localStorage.getItem("gamesCompletedIn4GuessesD"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn5GuessesD") !== null) {
    gamesCompletedIn5GuessesD = parseInt(localStorage.getItem("gamesCompletedIn5GuessesD"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn6GuessesD") !== null) {
    gamesCompletedIn6GuessesD = parseInt(localStorage.getItem("gamesCompletedIn6GuessesD"), 10);
  }
  if (localStorage.getItem("gamesFailedD") !== null) {
    gamesFailedD = parseInt(localStorage.getItem("gamesFailedD"), 10);
  }
  updateStatLines()
  console.log(`1 Guess Games: ${gamesCompletedIn1GuessD}, Total Games ${totalCompletedGames}`)
}
function updateStatLines() {
  totalCompletedGames = gamesCompletedIn1GuessD + gamesCompletedIn2GuessesD + gamesCompletedIn3GuessesD + gamesCompletedIn4GuessesD + gamesCompletedIn5GuessesD + gamesCompletedIn6GuessesD + gamesFailedD;
  guessD1Line.style.width = `${(gamesCompletedIn1GuessD / totalCompletedGames)*200}px`;
  guessD2Line.style.width = `${(gamesCompletedIn2GuessesD / totalCompletedGames)*200}px`;
  guessD3Line.style.width = `${(gamesCompletedIn3GuessesD / totalCompletedGames)*200}px`;
  guessD4Line.style.width = `${(gamesCompletedIn4GuessesD / totalCompletedGames)*200}px`;
  guessD5Line.style.width = `${(gamesCompletedIn5GuessesD / totalCompletedGames)*200}px`;
  guessD6Line.style.width = `${(gamesCompletedIn6GuessesD / totalCompletedGames)*200}px`;
  guessDFLine.style.width = `${(gamesFailedD / totalCompletedGames)*200}px`;
  amountCompleted1.innerHTML = gamesCompletedIn1GuessD;
  amountCompleted2.innerHTML = gamesCompletedIn2GuessesD;
  amountCompleted3.innerHTML = gamesCompletedIn3GuessesD;
  amountCompleted4.innerHTML = gamesCompletedIn4GuessesD;
  amountCompleted5.innerHTML = gamesCompletedIn5GuessesD;
  amountCompleted6.innerHTML = gamesCompletedIn6GuessesD;
  amountCompletedF.innerHTML = gamesFailedD;
}


// Event listener for loadedmetadata
function onMetadataLoaded() {
  // Generate a random percentage (between 0 and 70)
  const randomPercentage = randomNumberIndex * 79;

  // Calculate the time to start playing based on the percentage
  startTime = (randomPercentage / 100) * audioPlayer.duration;

  // Set the starting time of the audio
  audioPlayer.currentTime = startTime;

  // Play the audio
  audioPlayer.play();
}

function pauseTime() {
  if (audioPlayer.currentTime >= startTime + listenTime) {
    console.log(`pauseTime: Pausing audio. Over ${listenTime} seconds`);
    audioPlayer.pause();
  } else {
    console.log(
      `pauseTime: Not pausing audio ${startTime} ${audioPlayer.currentTime} ${listenTime}`
    );
  }
}

// Event listener for timeupdate
audioPlayer.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const currentTime = audioPlayer.currentTime - startTime;
  const progressPercentage = (currentTime / totalDuration) * 100;
  const dashArray = `${progressPercentage * 3.85} ${900 + progressPercentage}`;
  console.log(`updateProgress: Fired, ${dashArray} ${progressCircle}`);
  // Check if the progressCircle element is present
  if (progressCircle) {
    progressCircle.style.strokeDasharray = dashArray;
  }
}
// Function to filter songs based on user input
function filterSongs() {
  const input = document.getElementById("songInput").value.toLowerCase();
  const dataList = document.getElementById("songTitles");
  dataList.innerHTML = ""; // Clear previous options

  const filteredSongs = songTitles.filter((song) =>
    song.toLowerCase().includes(input)
  );

  // Limit the displayed options to a maximum of 5
  const maxOptions = 5;
  for (let i = 0; i < Math.min(filteredSongs.length, maxOptions); i++) {
    const option = document.createElement("option");
    option.value = filteredSongs[i];
    dataList.appendChild(option);
  }
}
function skipGuess() {
  if (guessNumber < 7 && buttonPressed == true) {
    guess = "Skip";
    console.log(`Skip Recieved`);
    submitGuess();
  }
}
function submitGuess() {
  localStorage.setItem("lastDay", day);
  if (guess !== "Skip") {
    guess = document.getElementById("songInput").value;
  }
  if (guessNumber < 7 && buttonPressed == true && guessing == true) {
    guessNumber = guessNumber + 1;
    if (guessNumber == 2) {
      guess1Element.innerHTML = guess;
      if (todaysSong == guess) {
        emptyGuess1Element.style.borderColor = "#fbe41a";
        statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} second using only 1 guess. Perfection!`;
        gamesCompletedIn1GuessD++;
      } else {
        listenTime = 3;
        emptyGuess1Element.style.borderColor = "#e23b35";
        saveTextLoacally("guess1Text", guess);
      }
    } else {
      if (guessNumber == 3) {
        guess2Element.innerHTML = guess;
        if (todaysSong == guess) {
          emptyGuess2Element.style.borderColor = "#fbe41a";
          statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} seconds using only 2 guesses. Great Job!`;
          gamesCompletedIn2GuessesD++;
        } else {
          listenTime = 5;
          emptyGuess2Element.style.borderColor = "#e23b35";
        }
      } else {
        if (guessNumber == 4) {
          guess3Element.innerHTML = guess;
          if (todaysSong == guess) {
            emptyGuess3Element.style.borderColor = "#fbe41a";
            statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} second using 3 guesses. Respectable!`;
            gamesCompletedIn3GuessesD++;
          } else {
            listenTime = 10;
            emptyGuess3Element.style.borderColor = "#e23b35";
          }
        } else {
          if (guessNumber == 5) {
            guess4Element.innerHTML = guess;
            if (todaysSong == guess) {
              emptyGuess4Element.style.borderColor = "#fbe41a";
              statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} seconds using 4 guesses. Not too shabby.`;
              gamesCompletedIn4GuessesD++;
            } else {
              listenTime = 20;
              emptyGuess4Element.style.borderColor = "#e23b35";
            }
          } else {
            if (guessNumber == 6) {
              guess5Element.innerHTML = guess;
              if (todaysSong == guess) {
                emptyGuess5Element.style.borderColor = "#fbe41a";
                statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} second using 5 guesses. Getting a little nervous there!`;
                gamesCompletedIn5GuessesD++;
              } else {
                listenTime = 30;
                emptyGuess5Element.style.borderColor = "#e23b35";
              }
            } else {
              if (todaysSong == guess) {
                guess6Element.innerHTML = guess;
                emptyGuess6Element.style.borderColor = "#fbe41a";
                statsText.innerHTML = `You managed to survive ${todaysSong} in ${listenTime} second using all 6 guesses. Whew, close call!`;
                gamesCompletedIn6GuessesD++;
              } else {
                emptyGuess6Element.style.borderColor = "#e23b35";
                statsText.innerHTML = `You didn't manage to get ${todaysSong} in the alotted 30 seconds using all 6 guesses. All good, feel free to try again!`;
                gamesFailedD++;
              }
            }
          }
        }
      }
    }
    console.log(
      `listen time = ${listenTime} guess number = ${guessNumber} todays song was ${todaysSong} you guessed ${guess}.`
    );
    if (
      todaysSong == guess ||
      emptyGuess6Element.style.borderColor == "#e23b35"
    ) {
      startTime = 0;
      listenTime = 580;
      totalDuration = 1.25;
      guessing = false;
      playRandom();
      statsPopup.style.display = "flex";
    }
  }
  document.getElementById("songInput").value = "";
  guess = "";
  updateStatsInLocalStorage();
  console.log(`1 Guess Games: ${gamesCompletedIn1GuessD}`);
}
loadStatsFromLocalStorage();
updateDailyInLocalStorage();