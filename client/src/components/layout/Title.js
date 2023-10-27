const Title = () => {
    const styles = getStyles()

  return <h1 style={styles.title}>PEOPLE AND THEIR CARS </h1>
}

const getStyles = () => ({
    title: {
        textAlign: 'center',
        fontSize: 15,
        padding: '15px',
        marginBottom: '60px'
    }
})

export default Title