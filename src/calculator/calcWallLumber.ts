const postWidth = 3.5;
const boardLength = 96; //8 foot long 2x4s
const studsDistance = 16;
const postsRequiredDistance = 240; // 20 feet in inches
const boardsInSectionSize = Math.floor(postsRequiredDistance / boardLength);
const fullBoardsInSection = boardsInSectionSize * boardLength;

function getPlatesInWall(inches: number) {
  //Assumption: as per assignment 3, Gerald wants two roof plates and one floor plate per wall.
  return Math.ceil(inches / boardLength) * 3;
}

function getStudsInLength(inches: number) {
  let studs = Math.ceil(inches / studsDistance);
  if (inches % 16 === 0) {
    studs += 1;
  }
  return studs;
}

function getExtraPostsNeeded(inches: number) {
  //If our wall isn't at least 20 feet long, we don't need any extra posts.
  if (inches < 240) return 0;
  const wallLengthRequiredBeforePost = getExtraWallLength(inches);
  const wallLengthPlusPost = postsRequiredDistance + postWidth;
  const requiredPosts = Math.ceil(
    wallLengthRequiredBeforePost / wallLengthPlusPost
  );
  return requiredPosts;
}

function getExtraWallLength(inches: number) {
  return Math.max(inches - postsRequiredDistance, 0);
}

function isPostRequired(inches: number): number {
  const extraWallLength = Math.max(inches - postsRequiredDistance, 0);
  const wholeNumber = Math.ceil(extraWallLength);
  const isPostRequired = Math.min(wholeNumber, 1);
  return isPostRequired;
}

function getFullSections(inches: number, posts: number) {
  //How big is each section, and how big is the final section?
  const inchesReducedPerSection = postsRequiredDistance - fullBoardsInSection;
  const lastSectionSize = inches - posts * (postsRequiredDistance + postWidth);
  const remainingBeforeNewPost = postsRequiredDistance - lastSectionSize;

  let fullSections = Math.floor(
    remainingBeforeNewPost / inchesReducedPerSection
  );
  fullSections = Math.min(fullSections, posts);

  //Make sure we need at least one post.  isPostRequired will multiply by 0 if not needed.
  fullSections = fullSections * isPostRequired(inches);

  return fullSections;
}

function getLastSectionSize(inches: number, posts: number) {
  //How big is the last section?
  const fullSections = getFullSections(inches, posts);
  const lastSectionSize =
    inches - posts * postWidth - fullSections * fullBoardsInSection;
  return lastSectionSize;
}

export function calcWallLumber(inches: number) {
  //Get required posts
  const requiredPosts = getExtraPostsNeeded(inches);
  const fullSections = getFullSections(inches, requiredPosts);
  const lastSectionSize = getLastSectionSize(inches, requiredPosts);
  const studs =
    getStudsInLength(inches) * fullSections + getStudsInLength(lastSectionSize);
  const plates = getPlatesInWall(inches);
  return {
    function: "calcWallLumber",
    inches,
    studs,
    posts: requiredPosts,
    plates,
  };
}
