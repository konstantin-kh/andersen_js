class Grid {
  constructor(options) {
    const {tableName, columnsAmount, rowsAmount, background, data} = options;
    this.tableName = tableName;
    this.columnsAmount = columnsAmount;
    this.rowsAmount = rowsAmount;
    this.background = background;
    this.data = data;
  }
  showData() {
    return this.data.forEach(row => row);
  }
  getFilterByPosition(position) {
    return this.data.filter(data => data.position === position);
  }
  removeDataByName(position) {
    let updatedData = this.data.filter(row => {
      const {name} = row;
      return name !== position;
    });
    this.data = updatedData;
  }
}

class UserTable extends Grid {
  constructor(options) {
    const {isActiveTable} = options;
    super(options);
    this.isActiveTable = isActiveTable;
  }
  removeDataByName(position) {
    super.removeDataByName(position);
    this.rowsAmount = this.data.length;
  }
  initTable() {
    return {
      tableName: this.tableName,
      columnsAmount: this.columnsAmount,
      rowsAmount: this.rowsAmount,
      background: this.background,
      data: this.data,
      isActiveTable: this.isActiveTable,
    };
  }
  showData() {
    return this.data.slice(0).reverse().forEach(row => row);
  }
  calculateEmployeesSalary() {
    return this.data.reduce((total, employee) => total + employee.salary, 0);
  }
  addBonus(name, bonus) {
    let foundEmployee = this.data.find(employee => employee.name === name);
    foundEmployee.salary += bonus;
  }
  addFine(name, fine) {
    let foundEmployee = this.data.find(employee => employee.name === name);
    foundEmployee.salary -= fine;
  }
  showEmployees() {
    return this.data.forEach(employee => employee.name);
  }
}

class OrderTable extends Grid {
  constructor(options) {
    const {isActiveTable} = options;
    super(options);
    this.isActiveTable = isActiveTable;
  }
  setCheckbox(id, param) {
    let foundId = this.data.find(row => row.id === id);
    foundId.isCheckbox = param;
  }
  countKeyboards() {
    return this.data.reduce((total, row) => {
      return total + row.Keyboard;
    }, 0);
  }
  isChecked(value) {
    return this.data.filter(row => {
      if (row.isCheckbox === value) {
        return true;
      }
      return false;
    });
  }
  initTable() {
    return {
      tableName: this.tableName,
      columnsAmount: this.columnsAmount,
      rowsAmount: this.rowsAmount,
      data: this.data,
      isActiveTable: this.isActiveTable,
    };
  }
}

const employees = [
  {id: 1, name: 'Lou', position: 'Manager', salary: 1500},
  {id: 2, name: 'Andy', position: 'DevOps', salary: 2500},
  {id: 3, name: 'Eric', position: 'Back-end', salary: 2100},
  {id: 4, name: 'Adam', position: 'Front-end', salary: 800},
  {id: 5, name: 'Chuck', position: 'Front-end', salary: 1950},
];

const peripherals = [
  {id: 1, Keyboard: 2, Mouse: 5, Monitor: 1, isCheckbox: false},
  {id: 2, Keyboard: 3, Mouse: 0, Monitor: 4, isCheckbox: false},
  {id: 3, Keyboard: 12, Mouse: 5, Monitor: 0, isCheckbox: true},
];

const employeesTable = new UserTable({tableName: 'Employees', columnsAmount: 5, rowsAmount: 5, background: 'black', data: employees, isActiveTable: true});
const ordersTable = new OrderTable({tableName: 'Peripherals', columnsAmount: 3, rowsAmount: 3, background: 'white', data: peripherals, isActiveTable: true});

employeesTable.getFilterByPosition('Front-end');
employeesTable.showData();
employeesTable.removeDataByName('Eric');
employeesTable.calculateEmployeesSalary();
employeesTable.addBonus('Lou', 300);
employeesTable.addFine('Adam', 50);
employeesTable.showEmployees();
employeesTable.initTable();
ordersTable.setCheckbox(1, true);
ordersTable.countKeyboards();
ordersTable.isChecked(true);
ordersTable.initTable();