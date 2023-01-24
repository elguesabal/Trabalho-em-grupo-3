import url from "../../url";

function feedback() {

    let emailfeedback = document.getElementById('emailfeedback').value
    let feedback = document.getElementById('exampleFormControlTextarea1').value

    class Feedback {
        constructor (emailfeedback, feedback) {
            this.emailfeedback = emailfeedback
            this.feedback = feedback
        }
    }

    let novoFeedback = new Feedback(emailfeedback, feedback)

    axios.post(url + 'feedback', novoFeedback)
    .then(resposta => document.getElementById('feedbackEnviado').textContent = 'Feedback enviado com sucesso!')
    .catch(erro => alert(erro))
}

export default feedback