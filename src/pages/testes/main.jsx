import DefaultButton from "../../ui/buttons/defaultButton/main"

const Testes = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ddd'
        }}>
            <div style={{
                width: '750px',
                height: '750px',
                backgroundColor: '#fff',
                padding: '3rem'
            }}>
                <DefaultButton label={'Get Auth Token'} />
            </div>
        </div>
    )
}

export default Testes
