using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Cache
{
	public partial class Table : Form
	{
		public Table()
		{
			InitializeComponent();
		}

		private void Table_Load(object sender, EventArgs e)
		{
			dataGridView1.RowCount = 4;
			for (int i = 0; i < 4; i++)
			{
				dataGridView1.Rows[i].Cells[0].Value = i + 1;
				dataGridView1.Rows[i].Cells[1].Value = "000";
				dataGridView1.Rows[i].Cells[2].Value = "0000000";
				dataGridView1.Rows[i].Cells[3].Value = 0;
				dataGridView1.Rows[i].Cells[4].Value = 0;
				dataGridView1.Rows[i].Cells[5].Value = 0;
			}
		}
	}
}
