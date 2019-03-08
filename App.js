import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Picker,
  Keyboard
} from 'react-native';
import { RadioButton } from 'react-native-paper';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeSerie: '',
      categoriaSerie: 'Filme',

      listaItens: [
        { nome: 'Game of thrones', categoria: 'Série' },
        { nome: 'Interestelar', categoria: 'Filme' },
        { nome: 'Lucifer', categoria: 'Série' },
        { nome: 'Naruto', categoria: 'Série' },
        { nome: 'Irmão de espião', categoria: 'Filme' },
        { nome: 'Titãs', categoria: 'Série' },
        { nome: 'La casa de papel', categoria: 'Série' },
        { nome: 'Vingadores', categoria: 'Filme' },
        { nome: 'Homem de ferro', categoria: 'Filme' }
      ]
    }
    // Amarando a função com o construtor da classe
    //this.renderItemData = this.renderItemData.bind(this);
    this.alterouTexto = this.alterouTexto.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  renderItemData(item) {
    return (
      <View style={styles.listaViewTotal}>
        <View style={styles.listaView}>
          <Text style={styles.itemListaCategoriaTexto}>{item.categoria}</Text>
          <Text style={styles.itemListaNomeTexto}>{item.nome}</Text>
        </View>
      </View>

    );
  }

  alterouTexto(texto) {
    let state = this.state;
    state.nomeSerie = texto;

    this.setState(state);
  }

  cadastrar() {
    let state = this.state;

    if (state.nomeSerie != '') {
      state.listaItens.push({ nome: state.nomeSerie, categoria: this.state.categoriaSerie });
      state.nomeSerie = '';
      this.setState(state)
      Keyboard.dismiss(); //Fechar teclado depois de salvar
      alert('Cadastrado com sucesso');

    } else {
      alert('Informe um nome');
    }
  }
  render() {
    return (
      <View style={styles.principalView}>
        <View style={styles.cabecalhoView}>
          <Text style={styles.cabecalhoTexto}>Anotador de Séries e Filmes</Text>
        </View>

        <View style={styles.cadastrarView}>
          <View style={styles.itemRadioButton}>
            <View style={styles.itemRadioButton}>
              <RadioButton value={this.state.categoriaSerie}
                color="green"
                status={this.state.categoriaSerie === 'Filme' ? 'checked' : 'unchecked'}
                onPress={(categoriaSerie) => { this.setState({ categoriaSerie: 'Filme' }); }}></RadioButton>
              <Text>Filme</Text>
            </View>
            <View style={styles.itemRadioButton}>
              <RadioButton value={this.state.categoriaSerie}
                color="red"
                status={this.state.categoriaSerie === 'Série' ? 'checked' : 'unchecked'}
                onPress={(categoriaSerie) => { this.setState({ categoriaSerie: 'Série' }); }}>
              </RadioButton>
              <Text>Série</Text>
            </View>
          </View>
          <TextInput
            style={styles.textoInput}
            keyboardType='default'
            placeholder='Digite o nome da série ou filme'
            onChangeText={(texto) => this.alterouTexto(texto)}
            value={this.state.nomeSerie}>
          </TextInput>

          <TouchableOpacity style={styles.botaoCadastrar} onPress={this.cadastrar}                  >
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.corpoView}>
          <FlatList data={this.state.listaItens} renderItem={({ item }) => this.renderItemData(item)} />
        </View>

        <View style={styles.rodapeView}>
          <Text style={styles.rodapeTexto}>Desenvolvido por Eduardo Uliana</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principalView: {
    flex: 1,
    backgroundColor: 'lightgray'
  },

  cabecalhoView: {
    backgroundColor: 'gray',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  corpoView: {
    flex: 1,
    backgroundColor: 'lightgray'
  },

  rodapeView: {
    height: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  cabecalhoTexto: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },

  rodapeTexto: {
    fontSize: 15,
    color: 'black'
  },

  listaViewTotal: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  listaView: {
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    flexGrow: 1,
    margin: 2,
    width: 280,
    height: 55,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgray'
  },

  itemListaCategoriaTexto: {
    fontSize: 15,
    fontStyle: 'italic'
  },

  itemListaNomeTexto: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  cadastrarView: {
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  textoInput: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width: 300,
    marginBottom: 5
  },

  categoriaCombo: {
    height: 50,
    width: 120,
    borderWidth: 2,
    borderColor: 'black'
  },

  botaoCadastrar: {
    width: 150,
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    padding: 10,
    borderRadius: 15
  },

  itemRadioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
