import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fab from '@material-ui/core/Fab';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
      <React.Fragment>
          <p>連絡先はこちら。（そのうちメールフォーム作ります）</p>
        <div className="contacts">
          <Fab variant="extended" color="primary" aria-label="Add" href="https://twitter.com/n_skij" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={['fab', 'twitter']} />&ensp;Twitter
          </Fab>
          <address>
            <span><FontAwesomeIcon icon={ faMailBulk } />n.skij0123[アットマーク]gmail.com</span>
          </address>
        </div>
      </React.Fragment>
  );
}

export default Contact;