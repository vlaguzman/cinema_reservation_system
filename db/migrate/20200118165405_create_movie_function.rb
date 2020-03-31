class CreateMovieFunction < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_functions do |t|
      t.string :description
      t.integer :available_chairs, null: false, default: 10 
      t.date :presentation_day
      t.timestamps
    end
  end
end
