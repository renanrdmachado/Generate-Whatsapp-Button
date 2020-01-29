import React, { Component } from 'react';
import InputMask from 'react-input-mask';

class GenerateLink extends Component {

    constructor(props){
        super(props);
        this.state = {
            num: '',
            txt: '',
            link:'',
            copied:''
        }
    }

    handleClick = () => {  
        let text;
        if(this.state.num.length===0){
            return;
        }

        if(this.state.txt.length!==0){
            text = `?text=${encodeURI(this.state.txt)}`;
        } else {
            text = "";
        }

        let numero = this.state.num.replace(/[^\d]+/g,'');
        this.setState({
            link: `https://wa.me/${numero}${text}`
        });

        this.setState({
            copied: ''
        });
    }

    clipboard = (e) => {

        var copyText = document.getElementById("clipboard");
        if(copyText.value.length!==0){
            copyText.select();
            document.execCommand("copy");
            this.setState({copied:"URL Copiada: " + copyText.value});
        }
    }
    
    render() {
        return(
            <div className="main-wrapper">
                <div className="box">
                    <h1>Crie o seu <strong>Link de WhatsApp</strong> abaixo:</h1>

                    <div className="form-group">
                        <label>
                            NÚMERO<br/>
                            <InputMask id="numero" mask="99 (99) 99999 9999" type="text" placeholder="55 (41) 9 9999 9999" onChange={e=>this.setState({num:e.target.value})}/>
                        </label>
                    </div>

                    
                    <div className="form-group">
                        <label>
                            MENSAGEM CURTA<br/>
                            <input id="texto" type="text" placeholder="Olá, gostaria de um orçamento..." onChange={e=>this.setState({txt:e.target.value})}/>
                        </label>
                    </div>

                    <div className="form-group text-center">
                        <button onClick={this.handleClick}>GERAR LINK</button>
                    </div>

                    <div className="form-group copy text-center">
                        {this.state.link &&
                        <input id="clipboard" type="text" value={this.state.link && this.state.link} onClick={this.clipboard} />
                        }
                        {this.state.copied && <div className="alert">{this.state.copied}</div>}
                        {this.state.link &&
                            <div className="">
                                <a href={this.state.link} target="_blank" className="btn btn-primary">Ver link</a>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }

}
export default GenerateLink;
