<center>
### ┍━━━━━━━ ⋆⋅☆⋅⋆ 𝐦𝐲𝐩𝐡𝐝 ⋆⋅☆⋅⋆ ━━━━━━━┑
</center>
<p>
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</p>
---

Today, the 27th of April 2022, marks my very first day on my PhD journey. I am *scared, excited, and grateful*, all at the same time (.❛ ᴗ ❛.).
I am scared of adversity ahead. Excited about incoming projects and discussions. Grateful for this short time on Earth.
Nevertheless, it's still a casual day, I went to work at 8:45AM, had lunch around 12:30PM. My dog pee inside the house, and my cat was sick.

At work, I decided to jot down my PhD bucket list here. Both academic and non-academic related. It's gonna be about my 5-beautiful-year as a Badger. Oh, Wisconsin!

<center>
##### ───── ❝ bucket list ❞ ─────
</center>

**Research**

- [ ] Submit to ICCV'23
- [ ] Submit to SIGGRAPH

**Study**

- [x] Papers Summary Project
- [ ] Technical Blog

**Activities**

- [ ] Southeast Asian Women in CS webpage


### 📰 𝕟𝕖𝕨𝕤  📰

##### 2022

- 27 April: Kick start of myPhD project, 3-pass-papers!

---
<center>
┕━━━━━━━━ ⋆⋅☆⋅⋆ the end ⋆⋅☆⋅⋆ ━━━━━━━━┙
</center>