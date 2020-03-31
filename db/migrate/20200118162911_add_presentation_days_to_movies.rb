class AddPresentationDaysToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :presentation_days, :date, array: true, default: []
  end
end
