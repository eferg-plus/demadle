var artist = "Twenty One Pilots";
var twitter = "@eferg0064";
var startDate = "";
const audioPlayer = document.getElementById("audioPlayer");
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
];
let buttonPressed = false;
// Initialize variables outside the function
let startTime = 0;
let listenTime = 15;
let streak = 0;
let currentSong = "";
let guess = "";
let guessing = true;
let songPlaying = false;
let nextSongNeeded = false;
let firstOption = "";

// Set the stats
let bestStreak = 0;
// Set the total duration for the progress ring (30 seconds)
let totalDuration = 15;

const statsText = document.getElementById("statsText");
const statsPopup = document.getElementById("statsPopup");
const streakScore = document.getElementById("streakScore");
const input = document.getElementById("songInput");
const bestStreaktext = document.getElementById("bestStreakText");
const textToCopy = document.getElementById("textToCopy");



audioPlayer.addEventListener("timeupdate", pauseTime);
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  // Check if the pressed key is "Enter" (key code 13)
  if (event.key === "Enter") {
    // Call the submitGuess function
    if (firstOption) {
      console.log(`top Option is ${firstOption}`);
      document.getElementById("songInput").value = firstOption;
      guess = firstOption;
    }
    submitGuess();
  }
}

// Progress Ring
const progressRing = document.querySelector(".progress-ring");
// Progress Circle (within the progress ring)
const progressCircle = progressRing.querySelector(".progress-circle");
const playButton = document.getElementById("button");

// Function to play a random MP3
function playRandom() {
  // Clear existing event listener to avoid unexpected behavior
  audioPlayer.removeEventListener("loadedmetadata", onMetadataLoaded);

  if (buttonPressed==false) {
    streak = 0;
    streakScore.innerHTML = streak;
  } 
  if (buttonPressed==false || nextSongNeeded==true) {
    // Set the source of the audio element to a random MP3 file
    const randomIndex = Math.floor(Math.random() * songFiles.length);
    const selectedFile = songFiles[randomIndex];
    currentSong = songTitles[randomIndex];
    audioPlayer.src = selectedFile;

    // Add the event listener for loadedmetadata
    audioPlayer.addEventListener("loadedmetadata", onMetadataLoaded);
    // Update the playing state
    buttonPressed = true;
    nextSongNeeded = false;
  }
  pauseTime();
}

//Local Storage Stuff

function updateStatsInLocalStorage() {
  // Store stats in local storage
  localStorage.setItem("bestStreak", streak);
  bestStreaktext.innerHTML = `Your best streak: 🔥${bestStreak}`;
  textToCopy.innerHTML = `TØP Rapid 🔥${bestStreak}
        https://dema-heardle.glitch.me/rapid`;
}

function loadStatsFromLocalStorage() {
  // Load stats from local storage
  if (localStorage.getItem("bestStreak") !== null) {
    bestStreak = parseInt(localStorage.getItem("bestStreak"), 10);
    bestStreaktext.innerHTML = `Your best streak: 🔥${bestStreak}`;
    textToCopy.innerHTML = `TØP Rapid 🔥${bestStreak}
        https://dema-heardle.glitch.me/rapid`;
  }
  updateStatScores()
  console.log(`Best Streak: ${bestStreak}`);
}

function updateStatScores() {
  
}
function resetInput() {
  setTimeout(resetBorder, 1000);
}
function resetBorder() {
  input.style.border = "1px solid #333";
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
    bestStreaktext.innerHTML = `Your best streak: 🔥${bestStreak}`
    statsText.innerHTML = `You ended with a streak of ${streak}. You got out on ${currentSong}.`
    statsPopup.style.display = 'flex';
    buttonPressed = false;
    document.getElementById("songInput").value = "";
    guess = "";
  } else {
    // console.log(`pauseTime: Not pausing audio ${startTime} ${audioPlayer.currentTime} ${listenTime}`);
  }
}

// Event listener for timeupdate
audioPlayer.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const currentTime = audioPlayer.currentTime - startTime;
  const progressPercentage = (currentTime / totalDuration) * 100;
  const dashArray = `${progressPercentage * 4.05} ${900 + progressPercentage}`;
  // console.log(`updateProgress: Fired, ${dashArray} ${progressCircle}`);
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
  firstOption = dataList.firstChild;
  //console.log(`${topOption}`)
  const filteredSongs = songTitles.filter((song) =>
    song.toLowerCase().includes(input)
  );

  // Limit the displayed options to a maximum of 7
  const maxOptions = 7;
  for (let i = 0; i < Math.min(filteredSongs.length, maxOptions); i++) {
    const option = document.createElement("option");
    option.value = filteredSongs[i];
    dataList.appendChild(option);
    if (i == 0) {
      firstOption = option.value;
      console.log(`${firstOption}`)
    }
  }
}
function submitGuess() {
  guess = document.getElementById("songInput").value;
  if (buttonPressed == true && guessing == true) {
      if (currentSong == guess) {
        streak = streak+1;
        streakScore.innerHTML = streak;
        input.style.border = "3px solid #4fffec";
        resetInput();
        if (streak >= bestStreak) {
          console.log(`streak Updated`)
          updateStatsInLocalStorage();
          loadStatsFromLocalStorage();
      }
        nextSongNeeded=true;
        playRandom();
      } else {
        input.style.border = "3px solid #ff4646";
        resetInput();
      }
  }
  document.getElementById("songInput").value = "";
  guess = "";
}
loadStatsFromLocalStorage();