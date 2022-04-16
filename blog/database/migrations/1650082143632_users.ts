import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
	protected tableName = 'users';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('user_id');
			table.string('username', 250).notNullable;
			table.string('email', 250).notNullable;
			table.string('password', 250).notNullable;
			/**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
			table.datetime('created_at', { useTz: true });
			table.datetime('updated_at', { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
