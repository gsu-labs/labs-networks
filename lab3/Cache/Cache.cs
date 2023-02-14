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
	public partial class Cache : Form
	{
		public const int Count = 4;
		double all = 0, cacheP = 0, cachePr = 0;
		Random r = new Random();
		Table table = new Table();
		int index = 0;

		private void button1_Click(object sender, EventArgs e)
		{
			all++;
			int counter = 0;
			int counterU = 0;
			bool isFull = false;

			for (int i = 0; i < Count; i++)
			{
				counter++;
				if (table.dataGridView1.Rows[i].Cells[2].Value.ToString() != textBox1.Text)
				{
					isFull = false;
					if (table.dataGridView1.Rows[i].Cells[3].Value.ToString() == "0")
					{
						table.dataGridView1.Rows[i].Cells[4].Value = 1;
						table.dataGridView1.Rows[i].Cells[1].Value = r.Next(1, 999);
						table.dataGridView1.Rows[i].Cells[3].Value = 1;
						table.dataGridView1.Rows[i].Cells[2].Value = textBox1.Text;
						label4.Text = "Кэш - промах";
						cachePr++;
						break;
					}
					else
					{
						isFull = true;
					}
				}
				else
				{
					table.dataGridView1.Rows[i].Cells[4].Value = 1;
					isFull = false;
					label4.Text = "Кэш - попадание";
					cacheP++;
					break;
				}
			}

			if (isFull && (counter == Count))
			{
				for (int i = 0; i < counter; i++)
					if (table.dataGridView1.Rows[i].Cells[4].Value.ToString() == "0")
					{
						table.dataGridView1.Rows[i].Cells[2].Value = textBox1.Text;
						table.dataGridView1.Rows[i].Cells[4].Value = 1;
						table.dataGridView1.Rows[index].Cells[5].Value = 0;
						table.dataGridView1.Rows[i].Cells[5].Value = 1;
						index = i;
						label4.Text = "Кэш - промах";
						cachePr++;
						break;
					}
				counter = 0;
			}

			for (int i = 0; i < Count; i++)
				if (table.dataGridView1.Rows[i].Cells[4].Value.ToString() == "1")
					counterU++;

			if (counterU == Count)
			{
				for (int i = 0; i < Count; i++)
				{
					table.dataGridView1.Rows[i].Cells[4].Value = 0;
				}
			}
			textBox1.Focus();
			textBox1.Clear();

			label5.Text = Math.Round(((cacheP - cachePr) / all), 3).ToString();
		}

		private void button2_Click(object sender, EventArgs e)
		{
			for (int i = 0; i < Count; i++)
			{
				textBox1.Text = r.Next(1, 128).ToString();
				button1_Click(sender, e);
			}

			label5.Text = Math.Round(((cacheP - cachePr) / all), 3).ToString();
		}

		private void Cache_Activated(object sender, EventArgs e)
		{
			textBox1.Focus();
		}

		private void Cache_Load(object sender, EventArgs e)
		{
			table.Show();
		}

		public Cache()
		{
			InitializeComponent();
		}
	}
}
