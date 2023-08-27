const setCookie = (name: string, value: string) => {
	const cookie = { name, value, path: '/', domain: process.env.DOMAIN }
	return cookie;
}

const generateRandomEmail = (emailPrefix?: string) => {
	const email = `${emailPrefix}+${Date.now()}_${Math.floor(Math.random() * 9999)}@gmail.com`;
	return email;
  
}

export { setCookie, generateRandomEmail };