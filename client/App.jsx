import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import CreateAccount from './src/pages/createAccount/index.jsx';

Meteor.startup(() => {
  render(
    <div>
      <CreateAccount />
    </div>,
    document.getElementById('render-target')
  );
});
