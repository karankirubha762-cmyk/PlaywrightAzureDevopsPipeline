// @ts-check
const { test, expect } = require('@playwright/test');

// Write a test
test('Google test1', async({page}) =>{
  // Go to URL
 await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
 await page.waitForTimeout(2000);
})

// Write a test
test('Google test2', async({page}) =>{
  // Go to URL
 await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
 await page.waitForTimeout(2000);

 
})

test("API Test1", async ({ request}) => {
  // create post api request using playwright
  const postAPIResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: {
      firstname: "testers talk playwright",
      lastname: "testers talk api testing",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "super bowls",
    },
  });

  // validate status code
  console.log(await postAPIResponse.json());
  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);
});

test("API Test2", async ({ request}) => {
  // create post api request using playwright
  const postAPIResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: {
      firstname: "testers talk playwright",
      lastname: "testers talk cypress",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "super bowls",
    },
  });

  // validate status code
  console.log(await postAPIResponse.json());
  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);
});

test("API Test3", async ({ request}) => {
  // create post api request using playwright
  const postAPIResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: {
      firstname: "testers talk playwright",
      lastname: "testers talk javascript",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "super bowls",
    },
  });

  // validate status code
  console.log(await postAPIResponse.json());
  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);
});

test("API Test4", async ({ request}) => {
  // create post api request using playwright
  const postAPIResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: {
      firstname: "testers talk playwright",
      lastname: "testers talk cypress",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "super bowls",
    },
  });

  // validate status code
  console.log(await postAPIResponse.json());
  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(201);
});
