# HRnet

react-modal is a react library allowing to create a modal with a title and content

## Install the lib
1. Go to the npm site via this link https://www.npmjs.com/package/react-modal-hrnet-mthomas
2. Open the terminal then run the command __npm i react-modal-hrnet-mthomas__

### Use the lib

1. Call at the top of your component __import { Modal } from 'react-modal-hrnet-mthomas';__
2. Call the modal via <Modal/>
3. The modal takes 3 parameters
  - title: string 
  - content: string REQUIRED
  - handleModal: boolean REQUIRED
4. Here is an example of use:
```javascript
import { useState } from 'react';
import { Modal } from 'react-modal-hrnet-mthomas';

export function ModalExample() {
    const [modal, setModal] = useState(false);

    return (
        <>
            {modal && (
                <Modal
                    title='Employee created!'
                    content='The employee you created is now available in the "employee list" tab'
                    handleModal={setModal}
                />
            })
            <button onClick={setModal(true)}>Open modal<button/>
        </>
    );
}

```

__/!\Make sure you have Node.js installed on your machine__

## Team

Developer - Minor Thomas

__NPM: https://www.npmjs.com/package/react-modal-hrnet-mthomas__
