import TableComponent from '@/components/Table';
import { addPayROll } from '@/redux/actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PayRollCompany extends Component {

    componentDidMount() {
        console.log('El componente StoreConsumptionComponent se ha montado');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.companiesList !== this.props.companiesList) {
            console.log('La lista de empresas ha cambiado.');
        }
    }

    componentWillUnmount() {
        console.log('El componente StoreConsumptionComponent se desmontará');
    }


    render() {
        const { payRollList } = this.props;
        const columnas = ['ID', 'Nombre', 'Tipo', 'Acciones'];
        const datos = payRollList.map(payroll => [
            payroll.id,
            payroll.name,
            payroll.type,
        ]);

        return (
            <div>
                <TableComponent columnas={columnas} datos={datos} />
            </div>
        );
    }
}

//Funcion para definir que parte del store nos interesa utilizar
const mapStateToProps = (state) => ({
    payRollList: state.payRollList
});

//Suscribimos a nuestro componente con el store
export default connect(mapStateToProps)(PayRollCompany);