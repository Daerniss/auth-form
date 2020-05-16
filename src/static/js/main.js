// PASSWORD ICON
const passIcon = document.querySelectorAll('.passwordIcon');

passIcon.forEach((item) => {
	item.addEventListener('click', function (e) {
		let password = e.currentTarget.closest('div').querySelector('input[name=password]');

		if (password.type === 'password') {
			password.type = 'text';
		} else {
			password.type = 'password';
		}
	});
});

//SWITCH FORMS LINK
document.querySelectorAll('.btn__secondary').forEach((item) => {
	const signup = document.querySelector('.form--signup');
	const signin = document.querySelector('.form--signin');
	item.addEventListener('click', () => {
		if (!signup.classList.contains('active')) {
			signup.classList.add('active');
			signin.classList.remove('active');
		} else {
			signup.classList.remove('active');
			signin.classList.add('active');
		}
	});
});
