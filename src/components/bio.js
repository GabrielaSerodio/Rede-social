const Bio = (user) => {
  const template = `
    <section class="image-user">
      <img src="${user.image || 'https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png'}" class="img-usuario">
      <section class="bio">
        <p><strong>Nome:</strong> ${user.name || 'Nome'}</p>
        <p><strong>Idade:</strong> ${user.age || 'Idade'} anos</p>
        <p><strong>Profissão:</strong> ${user.profession || 'Profissão'}</p>
      </section>
    </section>
  `;
  return template;
};
export default Bio;
