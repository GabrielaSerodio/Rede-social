import Button from './button.js';
import ButtonImage from './image-button.js';
import Select from './select.js';
import Input from './input.js';
import Paragraph from './paragraph.js';


const Post = (props) => {
  const userId = firebase.auth().currentUser.uid;
  let template = `
  <div class="container-public">
    <div class="data-date-public">
    ${Paragraph({
    class: 'name-user',
    dataId: props.id,
    text: props.post.user ? `Publicado por ${props.post.user.name}` : 'fulano',
  })}
    ${Paragraph({
    class: 'date-post',
    dataId: props.id,
    text: props.post.addedAt.slice(0, 16),
  })} 
      </div>
    <div class="publication-public">
    ${Paragraph({
    class: 'publication',
    dataId: props.id,
    text: props.post.text,
  })} 
      <hr>
      <div class='info-like-privacy'>
      ${Paragraph({
    class: 'likes',
    dataId: `numbers-${props.id}`,
    text: props.post.likes || '',
  })} 
      ${Select({
    class: 'slc-privacy-post',
    dataId: props.id,
    selected: props.post.privacy,
    options: [{ value: '🔓', text: 'Público 🔓' }, { value: '🔐', text: 'Privado 🔐' }],
  })}
      </div>
    </div>
    <div class="info-post">
  ${ButtonImage({
    class: 'like-post',
    dataId: props.id,
    type: 'image',
    src: 'images/curtir-heart.png',
    onClick: props.likesEvent,
  })}
  `;

  if (userId === props.post.userId) {
    template += Button({
      class: 'edit-post',
      dataId: props.id,
      title: 'Editar',
      onClick: props.enableEvent,
    });

    template += Button({
      class: 'save-post',
      dataId: props.id,
      title: 'Salvar',
      onClick: props.updateEvent,
    });

    template += Button({
      class: 'delete-post',
      dataId: props.id,
      title: 'Deletar',
      onClick: props.deleteEvent,
    });
  }

  template += `
  </div>
  </div>`;

  return template;
};

export default Post;
