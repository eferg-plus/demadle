var artist = "Twenty One Pilots";
var twitter = "@eferg0064";
var startDate = "";
const audioPlayer = document.getElementById("audioPlayer");
const songFiles = [
  "audio/audio_implicit_demand_for_proof.mp3",
  "audio/audio_fall_away.mp3",
  "audio/audio_the_pantaloon.mp3",
  "audio/audio_addict_with_a_pen.mp3",
  "audio/audio_friend,_please.mp3",
  "audio/audio_march_to_the_sea.mp3",
  "audio/audio_johnny_boy.mp3",
  "audio/audio_oh,_ms._believer.mp3",
  "audio/audio_air_catcher.mp3",
  "audio/audio_trapdoor.mp3",
  "audio/audio_a_car,_a_torch,_a_death.mp3",
  "audio/audio_taxi_cab.mp3",
  "audio/audio_before_you_start_your_day.mp3",
  "audio/audio_isle_of_flightless_birds.mp3",
  "audio/audio_slowtown.mp3",
  "audio/audio_forest.mp3",
  "audio/audio_glowing_eyes.mp3",
  "audio/audio_kitchen_sink.mp3",
  "audio/audio_anathema.mp3",
  "audio/audio_lovely.mp3",
  "audio/audio_ruby.mp3",
  "audio/audio_be_concerned.m4a",
  "audio/audio_clear.mp3",
  "audio/audio-ode_to_sleep.mp3",
  "audio/audio_holding-on_to_you.mp3",
  "audio/audio_migraine.mp3",
  "audio/audio_house_of_gold.mp3",
  "audio/audio_car_radio.mp3",
  "audio/audio_semi-automatic.mp3",
  "audio/audio_screen.mp3",
  "audio/audio_the_run_and_go.mp3",
  "audio/audio_fake_you_out.mp3",
  "audio/audio_guns_for_hands.mp3",
  "audio/audio_trees.mp3",
  "audio/audio_truce.mp3",
  "audio/audio_heavydirtysoul.mp3",
  "audio/audio_stressed_out.mp3",
  "audio/audio_ride.mp3",
  "audio/audio_fairly_local.mp3",
  "audio/audio_tear_in_my_heart.mp3",
  "audio/audio_lane_boy.mp3",
  "audio/audio_the_judge.mp3",
  "audio/audio_doubt.mp3",
  "audio/audio_polarize.mp3",
  "audio/audio_we_dont_believe_whats_on_tv.mp3",
  "audio/audio_message_man.mp3",
  "audio/audio_hometown.mp3",
  "audio/audio_not_today.mp3",
  "audio/audio_goner.mp3",
  "audio/audio_heathens.mp3",
  "audio/audio_cancer.mp3",
  "audio/audio_jumpsuit.mp3",
  "audio/audio_levitate.mp3",
  "audio/audio_morph.mp3",
  "audio/audio_my_blood.mp3",
  "audio/audio_chlorine.mp3",
  "audio/audio_smithereens.mp3",
  "audio/audio_neon_gravestones.mp3",
  "audio/audio_the_hype.mp3",
  "audio/audio_nico_and_the_niners.mp3",
  "audio/audio_cut_my_lip.mp3",
  "audio/audio_bandito.mp3",
  "audio/audio_pet_cheetah.mp3",
  "audio/audio_legend.mp3",
  "audio/audio_leave_the_city.mp3",
  "audio/audio_level_of_concern.mp3",
  "audio/audio_good_day.mp3",
  "audio/audio_choker.mp3",
  "audio/audio_shy_away.mp3",
  "audio/audio_the_outside.mp3",
  "audio/audio_saturday.mp3",
  "audio/audio_never_take_it.mp3",
  "audio/audio_mulberry_street.mp3",
  "audio/audio_formidable.mp3",
  "audio/audio_bounce_man.mp3",
  "audio/audio_no_chances.mp3",
  "audio/audio_redecorate.mp3",
  "audio/audio_choker_stressed_out_migraine_morph_holding_onto_you_-_livestream.mp3",
  "audio/audio_mulberry_street_livestream.mp3",
  "audio/audio_lane_boy_redecorate_chlorine_-_livestream.mp3",
  "audio/audio_shy_away_-_livestream.mp3",
  "audio/audio_the_outside_-_livestream.mp3",
  "audio/audio_heathens_trees_-_livestream.mp3",
  "audio/audio_jumpsuit_heavydirtysoul_-_livestream.mp3",
  "audio/audio_saturday_level_of_concern_ride_car_radio_-_livestream.mp3",
  "audio/audio_never_take_it_-_livestream.mp3",
  "audio/Twenty One Pilots - Overcompensate.mp3",
  "audio/Twenty One Pilots - Next Semester.mp3",
  "audio/Twenty One Pilots - Backslide.mp3",
  "audio/Twenty One Pilots - Midwest Indigo.mp3",
  "audio/Twenty One Pilots - Routines in the Night.mp3",
  "audio/Twenty One Pilots - Vignette.mp3",
  "audio/Twenty One Pilots - The Craving (Jenna's Version).mp3",
  "audio/Twenty One Pilots - The Craving (single version).mp3",
  "audio/Twenty One Pilots - Lavish.mp3",
  "audio/Twenty One Pilots - Navigating.mp3",
  "audio/Twenty One Pilots - Snap Back.mp3",
  "audio/Twenty One Pilots - Oldies Station.mp3",
  "audio/Twenty One Pilots - At the Risk of Feeling Dumb.mp3",
  "audio/Twenty One Pilots - Paladin Strait.mp3",
  "audio/Twenty One Pilots - Stressed Out - MTV.mp3",
  "audio/Twenty One Pilots - Tear in My Heart - MTV.mp3",
  "audio/Twenty One Pilots - House of Gold_Lane Boy - MTV.mp3",
  "audio/Twenty One Pilots - Shy Away - MTV.mp3",
  "audio/Twenty One Pilots - Ride_Nico and The Niners - MTV.mp3",
  "audio/Twenty One Pilots - Car Radio_Heathens - MTV.mp3",
  "audio/Twenty One Pilots - The Line.mp3",
  // Add More Songs
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
  "Slowtown",
  "Forest",
  "Glowing Eyes",
  "Kitchen Sink",
  "Anathema",
  "Lovely",
  "Ruby",
  "Be Concerned",
  "Clear",
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
let gamesCompletedIn1Guess = 0;
let gamesCompletedIn2Guesses = 0;
let gamesCompletedIn3Guesses = 0;
let gamesCompletedIn4Guesses = 0;
let gamesCompletedIn5Guesses = 0;
let gamesCompletedIn6Guesses = 0;
let gamesFailed = 0;
let totalCompletedGames = 1;
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
    const randomIndex = Math.floor(Math.random() * songFiles.length);
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
  localStorage.setItem("gamesCompletedIn1Guess", gamesCompletedIn1Guess);
  localStorage.setItem("gamesCompletedIn2Guesses", gamesCompletedIn2Guesses);
  localStorage.setItem("gamesCompletedIn3Guesses", gamesCompletedIn3Guesses);
  localStorage.setItem("gamesCompletedIn4Guesses", gamesCompletedIn4Guesses);
  localStorage.setItem("gamesCompletedIn5Guesses", gamesCompletedIn5Guesses);
  localStorage.setItem("gamesCompletedIn6Guesses", gamesCompletedIn6Guesses);
  localStorage.setItem("gamesFailed", gamesFailed);
  updateStatLines()
}

function loadStatsFromLocalStorage() {
  // Load stats from local storage
  if (localStorage.getItem("gamesCompletedIn1Guess") !== null) {
    gamesCompletedIn1Guess = parseInt(localStorage.getItem("gamesCompletedIn1Guess"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn2Guesses") !== null) {
    gamesCompletedIn2Guesses = parseInt(localStorage.getItem("gamesCompletedIn2Guesses"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn3Guesses") !== null) {
    gamesCompletedIn3Guesses = parseInt(localStorage.getItem("gamesCompletedIn3Guesses"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn4Guesses") !== null) {
    gamesCompletedIn4Guesses = parseInt(localStorage.getItem("gamesCompletedIn4Guesses"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn5Guesses") !== null) {
    gamesCompletedIn5Guesses = parseInt(localStorage.getItem("gamesCompletedIn5Guesses"), 10);
  }
  if (localStorage.getItem("gamesCompletedIn6Guesses") !== null) {
    gamesCompletedIn6Guesses = parseInt(localStorage.getItem("gamesCompletedIn6Guesses"), 10);
  }
  if (localStorage.getItem("gamesFailed") !== null) {
    gamesFailed = parseInt(localStorage.getItem("gamesFailed"), 10);
  }
  updateStatLines()
  console.log(`1 Guess Games: ${gamesCompletedIn1Guess}, Total Games ${totalCompletedGames}`)
}
function updateStatLines() {
  totalCompletedGames = gamesCompletedIn1Guess + gamesCompletedIn2Guesses + gamesCompletedIn3Guesses + gamesCompletedIn4Guesses + gamesCompletedIn5Guesses + gamesCompletedIn6Guesses + gamesFailed;
  guessD1Line.style.width = `${(gamesCompletedIn1Guess / totalCompletedGames)*200}px`;
  guessD2Line.style.width = `${(gamesCompletedIn2Guesses / totalCompletedGames)*200}px`;
  guessD3Line.style.width = `${(gamesCompletedIn3Guesses / totalCompletedGames)*200}px`;
  guessD4Line.style.width = `${(gamesCompletedIn4Guesses / totalCompletedGames)*200}px`;
  guessD5Line.style.width = `${(gamesCompletedIn5Guesses / totalCompletedGames)*200}px`;
  guessD6Line.style.width = `${(gamesCompletedIn6Guesses / totalCompletedGames)*200}px`;
  guessDFLine.style.width = `${(gamesFailed / totalCompletedGames)*200}px`;
  amountCompleted1.innerHTML = gamesCompletedIn1Guess;
  amountCompleted2.innerHTML = gamesCompletedIn2Guesses;
  amountCompleted3.innerHTML = gamesCompletedIn3Guesses;
  amountCompleted4.innerHTML = gamesCompletedIn4Guesses;
  amountCompleted5.innerHTML = gamesCompletedIn5Guesses;
  amountCompleted6.innerHTML = gamesCompletedIn6Guesses;
  amountCompletedF.innerHTML = gamesFailed;
}


// Event listener for loadedmetadata
function onMetadataLoaded() {
  // Generate a random percentage (between 0 and 70)
  const randomPercentage = Math.random() * 79;

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
  if (guess !== "Skip") {
    guess = document.getElementById("songInput").value;
  }
  if (guessNumber < 7 && buttonPressed == true && guessing == true) {
    guessNumber = guessNumber + 1;
    if (guessNumber == 2) {
      guess1Element.innerHTML = guess;
      if (todaysSong == guess) {
        emptyGuess1Element.style.borderColor = "#4b543a";
        statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} second using only 1 guess. Perfection!`;
        gamesCompletedIn1Guess++;
      } else {
        listenTime = 3;
        emptyGuess1Element.style.borderColor = "#957c0e";
      }
    } else {
      if (guessNumber == 3) {
        guess2Element.innerHTML = guess;
        if (todaysSong == guess) {
          emptyGuess2Element.style.borderColor = "#4b543a";
          statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} seconds using only 2 guesses. Great Job!`;
          gamesCompletedIn2Guesses++;
        } else {
          listenTime = 5;
          emptyGuess2Element.style.borderColor = "#957c0e";
        }
      } else {
        if (guessNumber == 4) {
          guess3Element.innerHTML = guess;
          if (todaysSong == guess) {
            emptyGuess3Element.style.borderColor = "#4b543a";
            statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} second using 3 guesses. Respectable!`;
            gamesCompletedIn3Guesses++;
          } else {
            listenTime = 10;
            emptyGuess3Element.style.borderColor = "#957c0e";
          }
        } else {
          if (guessNumber == 5) {
            guess4Element.innerHTML = guess;
            if (todaysSong == guess) {
              emptyGuess4Element.style.borderColor = "#4b543a";
              statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} seconds using 4 guesses. Not too shabby.`;
              gamesCompletedIn4Guesses++;
            } else {
              listenTime = 20;
              emptyGuess4Element.style.borderColor = "#957c0e";
            }
          } else {
            if (guessNumber == 6) {
              guess5Element.innerHTML = guess;
              if (todaysSong == guess) {
                emptyGuess5Element.style.borderColor = "#4b543a";
                statsText.innerHTML = `You correcty guessed ${todaysSong} in ${listenTime} second using 5 guesses. Getting a little nervous there!`;
                gamesCompletedIn5Guesses++;
              } else {
                listenTime = 30;
                emptyGuess5Element.style.borderColor = "#957c0e";
              }
            } else {
              if (todaysSong == guess) {
                guess6Element.innerHTML = guess;
                emptyGuess6Element.style.borderColor = "#4b543a";
                statsText.innerHTML = `You managed to survive ${todaysSong} in ${listenTime} second using all 6 guesses. Whew, close call!`;
                gamesCompletedIn6Guesses++;
              } else {
                emptyGuess6Element.style.borderColor = "#957c0e";
                statsText.innerHTML = `You didn't manage to get ${todaysSong} in the alotted 30 seconds using all 6 guesses. All good, feel free to try again!`;
                gamesFailed++;
              }
            }
          }
        }
      }
    }
    console.log(
      `listen time = ${listenTime} guess number = ${guessNumber} todays song was ${todaysSong} you guessed ${guess}`
    );
    if (
      todaysSong == guess ||
      emptyGuess6Element.style.borderColor == "#957c0e"
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
  console.log(`1 Guess Games: ${gamesCompletedIn1Guess}`);
}
loadStatsFromLocalStorage();