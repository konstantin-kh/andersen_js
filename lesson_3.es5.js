function Grid(tableName, columnsAmount, rowsAmount, background, data) {
  this.tableName = tableName;
  this.columnsAmount = columnsAmount;
  this.rowsAmount = rowsAmount;
  this.background = background;
  this.data = data;
}

Grid.prototype.showData = function() {
  return this.data.forEach(row => row);
};

Grid.prototype.getFilterByPosition = function(position) {
  return this.data.filter(data => data.position === position);
};

Grid.prototype.removeDataByName = function(position) {
  let updatedData = this.data.filter(row => {
    const {name} = row;
    return name !== position;
  });
  this.data = updatedData;
};
function UserTable(isActiveTable) {
  Grid.apply(this, arguments);
  this.isActiveTable = isActiveTable;
}

UserTable.prototype = Object.create(Grid.prototype);

UserTable.prototype.removeDataByName = function(position) {
  Grid.prototype.removeDataByName.call(this, position);
  this.rowsAmount = this.data.length;
};

UserTable.prototype.initTable = function() {
  return {
    tableName: this.tableName,
    columnsAmount: this.columnsAmount,
    rowsAmount: this.rowsAmount,
    background: this.background,
    data: this.data,
    isActiveTable: this.isActiveTable,
  };
};

UserTable.prototype.showData = function() {
  return this.data.slice(0).reverse().forEach(row => row);
};

UserTable.prototype.calculateEmployeesSalary = function() {
  return this.data.reduce((total, employee) => total + employee.salary, 0);
};

UserTable.prototype.addBonus = function(name, bonus) {
  let foundEmployee = this.data.find(employee => employee.name === name);
  foundEmployee.salary += bonus;
};

UserTable.prototype.addFine = function(name, fine) {
  let foundEmployee = this.data.find(employee => employee.name === name);
  foundEmployee.salary -= fine;
};

UserTable.prototype.showEmployees = function() {
  return this.data.forEach(employee => employee.name)
};
function OrderTable(isActiveTable) {
  Grid.apply(this, arguments);
  this.isActiveTable = isActiveTable;
}

OrderTable.prototype = Object.create(Grid.prototype);

OrderTable.prototype.setCheckbox = function(id, param) {
  let foundId = this.data.find(row => row.id === id);
  foundId.isCheckbox = param;
};

OrderTable.prototype.countKeyboards = function() {
  return this.data.reduce((total, row) => {
    return total + row.Keyboard;
  }, 0);
};

OrderTable.prototype.isChecked = function(value) {
  return this.data.filter(row => {
    if (row.isCheckbox === value) {
      return true;
    }
    return false;
  });
};

OrderTable.prototype.initTable = function() {
  return {
    tableName: this.tableName,
    columnsAmount: this.columnsAmount,
    rowsAmount: this.rowsAmount,
    background: this.background,
    data: this.data,
    isActiveTable: this.isActiveTable,
  }
};

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

const employeesTable = new UserTable('Employees', 5, 5, 'black', employees, true);
const ordersTable = new OrderTable('Peripherals', 3, 3, 'white', peripherals, true);

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