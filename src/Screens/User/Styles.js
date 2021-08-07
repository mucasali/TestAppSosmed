const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    margin: 10,
  },
  contentItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 8,
  },
  contentValue: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: null,
  },
  contentText: {
    marginVertical: 10,
  },
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    marginVertical: 10,
  },
  buttonSubmit: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textEmail: {
    fontSize: 12,
    fontWeight: '400',
    color: 'grey',
    marginTop: 5,
  },
  textValue: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
    marginTop: 5,
  },
};

export default styles;
