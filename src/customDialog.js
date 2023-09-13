"use strict" 

require('../lib/modal')
require('../lib/css/bootstrap.css')

export const confirm  = async ({message, title, buttons = {ok: {text: 'Ok', type: 'primary'}, cancel: {text: 'Cancel'}}}={}) => {
    return new Promise(resolve => {

        var modal = document.createElement('div');
        let id= `confirm_alert_${Math.floor(Math.random() * 10000000)}`
        modal.className = id;
        modal.innerHTML = `
        <div class="modal fade" id="${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">${title}</h5>
                        <button type="button" class="btn-close cancel" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${message}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary cancel" data-bs-dismiss="modal">${buttons.cancel.text || "Cancel"}</button>
                        <button type="button" id="ok" class="btn btn-${ buttons.ok.type || "primary"}">${buttons.ok.text  || "Ok"}</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.body.appendChild(modal);

        let customButton = document.createElement("button");
        customButton.setAttribute("data-bs-toggle", "modal");
        customButton.setAttribute("data-bs-target", `#${id}`);
        //add the button to document and click it
        document.body.appendChild(customButton);
        customButton.click();
        //remove the button from document
        document.body.removeChild(customButton);

        
        let ok_btn = modal.querySelector('#ok')
        let cancel_btns = modal.querySelectorAll('.cancel')


        ok_btn.addEventListener('click', ()=>{

            //CREATE A BUTTON AND DISMISS THE MODAL
            let dismiss_btn = document.createElement('button')
            dismiss_btn.setAttribute('data-bs-dismiss', 'modal')
            dismiss_btn.setAttribute('aria-label', 'Close')
            dismiss_btn.classList.add('d-none')

            //APPEND THE BUTTON TO THE MODAL
            document.querySelector(`#${id}`)?.appendChild(dismiss_btn)

            //DISMISS THE MODAL
            dismiss_btn.click()
            dismiss_btn.remove()


            //REMOVE MODAL FROM DOM USING ID
            document.querySelector(`#${id}`)?.remove()
            modal.remove()

            resolve(true)
        })
        cancel_btns.forEach(btn=>{
            btn.addEventListener('click', ()=>{

                //REMOVE MODAL FROM DOM USING ID
                document.querySelector(`#${id}`)?.remove()
                modal.remove()

                resolve(false)
            })
        })

    })
}

export const alert = async ({message, title, buttons = {ok: {text: 'Ok', type: 'primary'}}}={}) => {
    return new Promise(resolve => {

        var modal = document.createElement('div');
        let id= `alert_alert_${Math.floor(Math.random() * 10000000)}`
        modal.className = id;
        modal.innerHTML = `
        <div class="modal fade" id="${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">${title}</h5>
                    </div>
                    <div class="modal-body">
                        ${message}
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="ok" class="btn btn-${ buttons.ok.type || "primary"}"
                        data-bs-dismiss="modal">${buttons.ok.text  || "Ok"}</button>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        `;
        document.body.appendChild(modal);

        let customButton = document.createElement("button");
        customButton.setAttribute("data-bs-toggle", "modal");
        customButton.setAttribute("data-bs-target", `#${id}`);
        //add the button to document and click it
        document.body.appendChild(customButton);
        customButton.click();

        //remove the button from document
        document.body.removeChild(customButton);

        let ok_btn = modal.querySelector('#ok')
        let cancel_btns = modal.querySelectorAll('.cancel')
        ok_btn.addEventListener('click', ()=>{
            //CREATE A BUTTON AND DISMISS THE MODAL
            let dismiss_btn = document.createElement('button')
            dismiss_btn.setAttribute('data-bs-dismiss', 'modal')
            dismiss_btn.setAttribute('aria-label', 'Close')
            dismiss_btn.classList.add('d-none')

            //APPEND THE BUTTON TO THE MODAL
            document.querySelector(`#${id}`)?.appendChild(dismiss_btn)

            //DISMISS THE MODAL
            dismiss_btn.click()
            dismiss_btn.remove()


            //REMOVE MODAL FROM DOM USING ID
            document.querySelector(`#${id}`)?.remove()
            modal.remove()

            resolve(true)
        })

    })
}


export const prompt = async ({message, title, buttons = {ok: {text: 'Ok', type: 'primary'}, cancel: {text: 'Cancel'}}}={}) => {

    return new Promise(resolve => {

        var modal = document.createElement('div');
        let id= `prompt_alert_${Math.floor(Math.random() * 10000000)}`
        modal.className = id;
        modal.innerHTML = `
        <div class="modal fade" id="${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">${title}</h5>
                        <button type="button" class="btn-close cancel" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${message}
                        
                        <input type="text" class="form-control mt-2 mb-1" placeholder="Enter your text here..." aria-label="Text input example" aria-describedby="basic-addon1" name="input_prompt" id="input_prompt"></input>
                    </div>
                    <div class="modal-footer">
                        
                        
                        <button type="button" id="cancel" class="btn btn-${ buttons.cancel.type || "secondary"}"
                        data-bs-dismiss="modal">${buttons.cancel.text  || "Cancel"}</button>

                        <button type="button" id="ok" class="btn btn-${ buttons.ok.type || "primary"}"
                        data-bs-dismiss="modal">${buttons.ok.text  || "Ok"}</button>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        `;

        document.body.appendChild(modal);

        let customButton = document.createElement("button");
        customButton.setAttribute("data-bs-toggle", "modal");

        customButton.setAttribute("data-bs-target", `#${id}`);
        //add the button to document and click it
        //add the button to document and click it
        document.body.appendChild(customButton);
        customButton.click();
        //remove the button from document
        document.body.removeChild(customButton);
        let ok_btn = modal.querySelector('#ok')
        let cancel_btn = modal.querySelector('#cancel')
        let input_prompt = modal.querySelector('#input_prompt')

        ok_btn.addEventListener('click', ()=>{
            //CREATE A BUTTON AND DISMISS THE MODAL
            let dismiss_btn = document.createElement('button')
            dismiss_btn.setAttribute('data-bs-dismiss', 'modal')
            dismiss_btn.setAttribute('aria-label', 'Close')
            dismiss_btn.classList.add('d-none')

            //APPEND THE BUTTON TO THE MODAL
            document.querySelector(`#${id}`)?.appendChild(dismiss_btn)

            //DISMISS THE MODAL
            dismiss_btn.click()
            dismiss_btn.remove()


            //REMOVE MODAL FROM DOM USING ID
            document.querySelector(`#${id}`)?.remove()
            modal.remove()

            resolve(input_prompt.value)
        })
        

        cancel_btn.addEventListener('click', ()=>{
            //CREATE A BUTTON AND DISMISS THE MODAL
            let dismiss_btn = document.createElement('button')
            dismiss_btn.setAttribute('data-bs-dismiss', 'modal')
            dismiss_btn.setAttribute('aria-label', 'Close')
            dismiss_btn.classList.add('d-none')

            //APPEND THE BUTTON TO THE MODAL
            document.querySelector(`#${id}`)?.appendChild(dismiss_btn)

            //DISMISS THE MODAL
            dismiss_btn.click()
            dismiss_btn.remove()


            //REMOVE MODAL FROM DOM USING ID
            document.querySelector(`#${id}`)?.remove()
            modal.remove()

            resolve(false)
        })
    })
}

