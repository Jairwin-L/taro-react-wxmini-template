import { View } from '@tarojs/components'
import './index.scss'

export default function Main () {
	return (
		<>
			<View>首页</View>
			<View>
				{
					Array(50).fill('1').map((item, index) => {
						return <View key={index}>{item}------{index + 1}</View>
					})
				}
			</View>
			<View>底部</View>
		</>
	)
}
