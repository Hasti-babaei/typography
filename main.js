const txt = document.querySelector(".text");
const textOne = txt.querySelector("h1");
const walk = 500;

txt.addEventListener("mousemove", function (event) {
  const { offsetWidth: width, offsetHeight: height } = txt;

  let { offsetX: X, offsetY: Y } = event;

  X += event.target.offsetLeft;
  Y += event.target.offsetTop;

  const xWalk = Math.round((X / width) * walk - walk / 2);
  const yWalk = Math.round((Y / height) * walk - walk / 2);

  textOne.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(238 ,82,83,.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(89 ,31,151,.7),
        ${yWalk}px ${xWalk * -1}px 0px rgba(243 ,104,224,.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(254 ,202,87,.7)
        `;
});
