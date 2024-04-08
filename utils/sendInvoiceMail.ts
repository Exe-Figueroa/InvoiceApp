import { Invoice } from "src/invoices/schema/invoice.schema";

export const templateSendMail = (payload: Invoice): string => {
  const { client, items, paymentDue, id, paymentTerms } = payload;
  return /*html*/`
  <!DOCTYPE html>
  <html lang="en">

  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet">
  <title>Correo Invoice-App</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #fff;
      font-family: "League Spartan", sans-serif;
    }

    .principal-container {
      width: 60%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      background: #141625;
    }

    header {
      width: 100%;
      background-color: #373B53;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    header img {
      width: 65px;
      height: 65px;
    }

    h1{
      font-size: 16px;
      margin: auto;
      font-family: "League Spartan", sans-serif;
    }

    @media (max-width: 700px) {
      .principal-container {
        width: 100%;
      }
    }
  </style>
  </head>

  <body>
  <section class="principal-container">
    <header>
      <img src="https://i.ibb.co/d2fcQcw/header-Icon.png" alt="">
      <h1 style="font-size: 1.2rem;">Invoice App</h1>
      <div style="width: 65px;"></div>
    </header>
    <section 
      style="padding: 20px;"
    >
      <div 
      style="color: #888eb0a5; padding: 10px; width: fit-content; border-radius: 5px; border: solid 1px #373B53; display: flex; margin-bottom: 20px;"
      >To:  <p style="padding-left: 5px;">${client.clientName}</p> </div>
      <h2 style="display: flex; font-size: 14px; margin-bottom: 10px; font-weight: 400;">Invoice <p style="color: #7E88C3; padding-left: 5px;">#${id}</p></h2>
      <h3 style="font-size: 14px; margin-bottom: 10px; font-weight: 400;">Invoice Details</h3>
      <span style="font-size: 14px; margin-bottom: 10px; font-weight: 400;">Products</span>
      ${items.map(item => `
        <ul style="list-style: none; padding-left: 10px; line-height: 20px; margin-bottom: 20px; font-family: 'League Spartan', sans-serif;">
          <li><span style="color: rgba(255, 255, 255, 0.7);">Name</span>:  ${item.name}</li>
          <li><span style="color: rgba(255, 255, 255, 0.7);">Quantity</span>:  ${item.quantity}</li>
          <li><span style="color: rgba(255, 255, 255, 0.7);">Price</span>:  $${item.price}</li>
          <li><span style="color: rgba(255, 255, 255, 0.7);">Total</span>:  $${item.total}</li>
        </ul>`
  ).join('')}
      <span style="font-size: 14px; margin-bottom: 10px; font-weight: 400;">Payment</span>
      <div><span style="color: rgba(255, 255, 255, 0.7);">Payment due:</span> ${paymentDue}.</div>
      <div><span style="color: rgba(255, 255, 255, 0.7);">Payment Terms:</span> Net ${paymentTerms} days.</div>

      <div style="display: flex; width: 100%; justify-content: space-between; margin-bottom: 40px;">
        <p style="margin: auto 0">Total: $${items.reduce((acumulator, currentItem) => acumulator + currentItem.total, 0 )}</p>
        <p style="margin-left: auto; background-color: rgba(255, 145, 0, 0.1); padding: 10px 20px; width: fit-content; border-radius: 6px; font-weight: bold; color: #FF8F00;">● Pending</p>
      </div>
      <p style="font-size: 1.1rem; margin-bottom: 40px;">We remain at your disposal for any other management you may require.</p>
      <div 
      style="color: #7d7e80; padding: 10px; width: fit-content; border-radius: 5px; border: solid 1px #7d7e80; display: flex; margin-bottom: 20px; margin-top: 20px;"
      >Contact:  <p style="padding-left: 5px;">canteradocs@gmail.com</p> </div>
      <article style="margin-bottom: 20px; width: 100%; display: flex; border-top: 1px solid #373B53;">
        <img src="https://i.ibb.co/0rtsrnG/logo-Cantera.png" alt="" style="margin: 0 auto; width: 30%; margin-top: 40px;">
      </article>
    </section>
  </section>
  </body>
  </html>
  `;
}
export const paidInvoiceEmail = (payload: Invoice): string => {
  const { client, id, items } = payload;
  return /*html*/`
  <!DOCTYPE html>
  <html lang="en">

  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet">
  <title>Correo Invoice-App</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #fff;
      font-family: "League Spartan", sans-serif;
    }

    .principal-container {
      width: 60%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      background: #141625;
    }

    header {
      width: 100%;
      background-color: #373B53;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    header img {
      width: 65px;
      height: 65px;
    }

    h1{
      font-size: 16px;
      margin: auto;
      font-family: "League Spartan", sans-serif;
    }

    @media (max-width: 700px) {
      .principal-container {
        width: 100%;
      }
    }
  </style>
  </head>

  <body>
  <section class="principal-container">
    <header>
      <img src="https://i.ibb.co/d2fcQcw/header-Icon.png" alt="">
      <h1 style="font-size: 1.5rem;">Invoice App</h1>
      <div style="width: 65px;"></div>
    </header>
    <section 
    style="padding: 20px;"
    >
      <div 
      style="color: #888eb0a5; padding: 10px; width: fit-content; border-radius: 5px; border: solid 1px #373B53; display: flex; margin-bottom: 20px;"
      >To:  <p style="padding-left: 5px;">${client.clientName}</p> </div>
      <article style="width: 50%; margin: 30px auto; background-color: #6440f475; padding: 40px 20px; border-radius: 10px;">
        <h2 style="font-size: 1.5rem;">Congratulations!!</h2>
        <p style="font-size: 1.1rem; line-height: 20px;">We have recorded the payment of the invoice <span style="color: rgba(0,0,0, 0.72); padding-left: 5px;">#${id}</span>. We appreciate your prompt management. </p>
      </article>
      <h3 style="font-size: 14px; margin-bottom: 10px; font-weight: 400;">Invoice Details</h3>
      <span style="font-size: 14px; margin-bottom: 10px; font-weight: 400;">Products</span>
      ${items.map(item => `
        <ul style="list-style: none; padding-left: 10px; line-height: 20px; margin-bottom: 20px; font-family: 'League Spartan', sans-serif;">
          <li><span style="color: rgba(255, 255, 255, 0.7);">Name</span>:  ${item.name}</li>
          <li><span style="color: rgba(255, 255, 255, 0.7);">Quantity</span>:  ${item.quantity}</li>
          <li><span style="color: rgba(255, 255, 255, 0.7);">Price</span>:  $${item.price}</li>
          <li><span style="color: rgba(255, 255, 255, 0.7);">Total</span>:  $${item.total}</li>
        </ul>`
  ).join('')}
      <span style="font-size: 14px; margin-bottom: 10px; font-weight: 400;">Payment</span>

      <div style="display: flex; width: 100%; justify-content: space-between; margin-bottom: 40px;">
        <p style="margin: auto 0">Total: $${items.reduce((acumulator, currentItem) => acumulator + currentItem.total, 0 )}</p>
        <p style="margin-left: auto; background-color: rgba(51, 214, 159, 0.1)
; padding: 10px 20px; width: fit-content; border-radius: 6px; font-weight: bold; color: #33D69F;">● Paid</p>
      </div>

      <p style="font-size: 1.1rem; margin-bottom: 40px;">We remain at your disposal for any other management you may require.</p>
      <div 
      style="color: #7d7e80; padding: 10px; width: fit-content; border-radius: 5px; border: solid 1px #7d7e80; display: flex; margin-bottom: 20px; margin-top: 20px;"
      >Contact:  <p style="padding-left: 5px;">canteradocs@gmail.com</p> </div>
      <article style="margin-bottom: 20px; width: 100%; display: flex; border-top: 1px solid #373B53;">
        <img src="https://i.ibb.co/0rtsrnG/logo-Cantera.png" alt="" style="margin: 0 auto; width: 30%; margin-top: 40px;">
      </article>
    </section>
  </section>
  </body>
  </html>
  `;
}