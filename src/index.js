// js for the timeline
const timelineCards = document.querySelector(".kd-timeline-cards");
const timelinePoint = document.querySelectorAll(".kd-timeline-point");
const kdTimelineRight = document.querySelector(".kd-timeline-right");
const kdTimelineLeft = document.querySelector(".kd-timeline-left");
const kdTimelineClose = document.querySelector(".kd-timeline-close");
const timelineCardLayouts = document.querySelectorAll(".kd-timeline-layout");

// Activate cards
timelinePoint.forEach((point) => {
  point.addEventListener("click", (event) => {
    const hrefValue = event.currentTarget.querySelector("a").getAttribute("href");
    const activeCard = document.querySelector(`${hrefValue}`);
    timelineCards.classList.add("kd-card-active");
    activeCard.classList.add("timeline-active");
  });
});

// next cards

const findActiveCard = () => {
  const activeCard = document.querySelector(".timeline-active");
  const activeCardId = activeCard.getAttribute("id");
  return `${activeCardId}`
};

// right click

kdTimelineRight.addEventListener("click", (event) => {
  const nextCard = document.getElementById(findActiveCard()).nextElementSibling;
  deactivateInnerCard();
  if (!nextCard) {
    document.getElementById("kd-timeline-one").classList.add("timeline-active");
  } else {
    nextCard.classList.add("timeline-active");
  }
});

// left click

kdTimelineLeft.addEventListener("click", (event) => {
  const prevCard = document.getElementById(findActiveCard()).previousElementSibling;
  deactivateInnerCard();
  if (prevCard === kdTimelineClose) {
    document.querySelector(".kd-timeline-cards").lastElementChild.classList.add("timeline-active");
  } else {
    prevCard.classList.add("timeline-active");
  }
});


// close cards

const deactivateCards = (event) => {
  timelineCards.classList.remove("kd-card-active");
  deactivateInnerCard();
};

const deactivateInnerCard = () => {
  timelineCardLayouts.forEach((element) => {
    element.classList.remove("timeline-active");
  });
};

kdTimelineClose.addEventListener("click", deactivateCards);

// js for the toggle city areas
const toggleMenu = document.querySelectorAll(".menu");
toggleMenu.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.currentTarget.closest(".kd-city-state").querySelector(".kd-city-mid").classList.toggle("hidden");
    event.currentTarget.closest(".kd-city-state").querySelector(".kd-city-right").classList.toggle("visible");
  })
})