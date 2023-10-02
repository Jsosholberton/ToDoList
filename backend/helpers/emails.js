import nodemailer from "nodemailer";

export const emailReg = async (datos) => {
  const { email, name, token } = datos;
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9030bcbcb86256",
      pass: "dad88d9b1587b2",
    },
  });

  const info = await transport.sendMail({
    from: '"ToDoList - Admin" <correo@todolist.com>',
    to: email,
    subject: "ToDoList - Confirm your account",
    text: "Confirm your account on ToDoList",
    html: `<p>Hi: ${name} confirm your account on ToDoList</p>
    <p>Your account is almost ready you just have to confirm in the next link:
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirm the account</a> </p>
    <p>If you didn't create this account, you can ignore the message</p>
    `
  });
};

export const emailPwd = async (datos) => {
    const { email, name, token } = datos;
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "9030bcbcb86256",
        pass: "dad88d9b1587b2",
      },
    });
  
    const info = await transport.sendMail({
      from: '"ToDoList - Admin" <correo@todolist.com>',
      to: email,
      subject: "ToDoList - Confirm your account",
      text: "Restore your password on ToDoList",
      html: `<p>Hi: ${name} restore your password from your account on ToDoList</p>
      <p>Follow the next link to restore your password:
      <a href="${process.env.FRONTEND_URL}olvide-password/${token}">Restore</a> </p>
      <p>If you didn't restore the password, you can ignore the message</p>
      `
    });
  };
