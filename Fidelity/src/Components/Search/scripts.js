export const _renderHeader = section => {
    return (
      <View>
        <Text>
        <Text style={style.name}>{section.name}</Text> 
        </Text>
      </View>
    );
  };


export const _renderData = section => {
    return (
      <View>
        <Text>
        <Text style={style.DataTitle}>Pontos:</Text> {section.Pontos}
        </Text>
        <Text>
          <Text style={style.DataTitle}>CPF:</Text> {section.CPF}
        </Text>
        <Text>
          <Text style={style.DataTitle}>Tel:.</Text>{section.Telefone}
        </Text>
      </View>
    );
  };

export const _updateSections = section => {
updateActiveSections(section)
};