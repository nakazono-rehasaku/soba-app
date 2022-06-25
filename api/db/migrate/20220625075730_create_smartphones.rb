class CreateSmartphones < ActiveRecord::Migration[6.1]
  def change
    create_table :smartphones do |t|
      t.string :name, null: false, comment: '名称'
      t.string :maker, null: true, comment: 'メーカー'
      t.string :series, null: true, comment: 'シリーズ'
      t.date   :relese_date, null: true, comment: '発売日'

      t.timestamps
    end
  end
end
