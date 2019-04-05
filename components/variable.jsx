// One line function 
const Variable = ({variables}) => <li>{Variable}</li>

Variable.PropTypes = {
	variables = React.PropTypes.array.isRequired
}

// Multiline blocks
const LanguageList = ({languages}) => {
	<ul>
		{languages.map(language => <Language language={language} />)}
	</ul>
}