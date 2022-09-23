import { Play } from 'phosphor-react';
import { CountDownContainer, DataList, Divisor, FormContainer, HomeContainer, MinutesInput, StartCountDownButton, TaskInput } from './styles';

export const Home = () => {
	return (
		<HomeContainer>
			<form action="">
				<FormContainer>
					<label htmlFor="task">Vou trabalhar em</label>
					<TaskInput id={'task'}type="text" list='task-list' placeholder='Dê um nome para o seu projeto'/>
					<DataList id="task-list">
						<option value="Projeto 1"/>
						<option value="Projeto 2"/>
						<option value="Projeto 3"/>
						<option value="Projeto 4"/>
						<option value="Projeto 5"/>
					</DataList>
					<label htmlFor="minutesAmount" >durante</label>
					<MinutesInput 
						id={'minutesAmount'}
						type="number" 
						placeholder='00'
						step={5}
						min={5}
						max={60}
					/>
					<span>minutos</span>
				</FormContainer>

				<CountDownContainer>
					<span>0</span>
					<span>0</span>
					<Divisor>:</Divisor>
					<span>0</span>
					<span>0</span>
				</CountDownContainer>

				<StartCountDownButton 
					type='submit' 
					
				>
					<Play size={24}/>	Começar
				</StartCountDownButton>
			</form>

		</HomeContainer>
	);
};
