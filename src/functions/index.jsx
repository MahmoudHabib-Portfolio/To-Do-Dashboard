import gsap from "gsap";

export const RegBack = (target1) => {
  gsap.fromTo(target1, {x: -350, opacity: 0, duration: 2, delay: 0.5}, {x: 0, opacity: 1, duration: 2, delay: 0.5});
}

export const Loginback = (target2) => {
  gsap.fromTo(target2, {x: 350, opacity: 0, duration: 2, delay: 0.5}, {x: 0, opacity: 1, duration: 2, delay: 0.5});
}

export const StrepperOne = (target3) =>{
  gsap.fromTo(target3, {width: "0px", duration: 0.8}, {width: "100px", duration: 0.8});
}

/* export const WaveAnim = (target3) => {
  const tl = gsap.timeline();
  tl.fromTo(target3, {skewX: 0, duration: 1}, {skewX: 10, duration: 1});
  tl.fromTo(target3, {skewX: 10, duration: 1}, {skewX: -15, duration: 1});
} */