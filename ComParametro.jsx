export default function ComParametro(props) {
    const status = props.nota >= 7 ? ' aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.titulo } </h2>
            <p>
                <strong> { props.aluno } tem nota
                </strong>
                <strong> 
                    {props.nota} e está
                </strong>
                <strong> 
                    { status }
                </strong> !
            </p>
        </div>
    )
}
