const strLength = (myName, getLength) => {
  getLength(myName.length);
};

const printName = (nameLength) => {
  console.log(`OMG my name is ${nameLength} characters long`);
};

strLength("Raksha", printName);

const willThanosKillMe = (myName, notKill, killMe) => {
  if (myName.length % 2 === 0) {
    notKill();
  } else {
    killMe();
  }
};

const notKill = () => {
  console.log("Yay!! I am alive!");
};

const killMe = () => {
  console.log("Give my bose speakers and boAt headphones to my brother.");
};

willThanosKillMe("Swapnil", notKill, killMe);

const printFunc = (message, delay) => {
  setTimeout(() => {
    console.log(message);
  }, delay);
};

printFunc("This is my message", 1000);

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

fakeFetch("This is my data").then((data) => console.log(data));

fakeFetch("This is a fake error", true)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const getServerResponseLength = (msg) =>
  fakeFetch(msg)
    .then((data) => data.length)
    .catch((err) => console.log(err));

console.log(getServerResponseLength("This is the message"));

// Waterfall data
const syncCallsToServer = (msg1, msg2) =>
  fakeFetch(msg1).then((data) =>
    fakeFetch(msg2).then((data) => console.log(data))
  );

syncCallsToServer("MESS1", "MESS2");

const getData = async () => {
  const data = await fakeFetch("This is the dataaa");
  console.log(data);
};

getData();

// Waterfall using async

const getData2 = async (msg1, msg2) => {
  const data1 = await fakeFetch(msg1);
  const data2 = await fakeFetch(msg2);

  console.log({ data1, data2 });
};

getData2("Rak", "Paw");

// Homeworks

// parallely: using async await
const getData3 = async () => {
  const promise1 = fakeFetch(msg1);
  const promise2 = fakeFetch(msg2);
  const data1 = await promise1;
  const data2 = await promise2;
  console.log({ data1, data2 });
};
